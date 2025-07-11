// The errors below are false alarm, just ignore

import express from "express";
import bodyParser from "body-parser";
import mysql, { Connection } from "mysql2/promise";
import { checkConnectionStatus } from "../db/db";
import pool from "../db/db";
import { ContextUser } from "../auth/context-user"; // For User-ID

export const webhookRouter = express.Router();
const contextUser = new ContextUser(); // For User-ID

webhookRouter.use(bodyParser.json());
const port = 3000;

// Test : curl -X GET http://localhost:3000/webhook/db-status
webhookRouter.get("/webhook/db-status", async (req, res) => {
  const isConnected = await checkConnectionStatus();
  if (isConnected) {
    res.status(200).send("Database connection is operational");
  } else {
    res.status(500).send("Database connection is down");
  }
});

// Test : curl -X POST http://localhost:3000/webhook/save-url -H "Content-Type: application/json" -d "{\"url\": \"TEST_URL\",\"name\": \"TEST_URL_NAME\"}"
webhookRouter.post("/webhook/save-url", async (req, res) => {
  const token = req.headers["authorization"] ?? null;
  const { url, name } = req.body;

  const query =
    "INSERT INTO webhook_urls (url, name, user_id) VALUES (?, ?, ?)";
  try {
    const userId = await contextUser.getUserId(token);
    if (userId == null) {
      res.status(401).send("Unauthorized. Cannot get User ID.");
    }
    const connection = await pool.getConnection();
    await connection.query(query, [url, name, userId]);
    connection.release();
    console.log("URL saved to database");
    res.status(200).send("URL saved successfully");
  } catch (err) {
    console.error("Error inserting URL into the database:", err);
    res.status(500).send("Error saving URL");
  }
});

// Test : curl -X POST http://localhost:3000/webhook/test -H "Content-Type: application/json" -d "{\"message\": \"Hello, World!\"}"
webhookRouter.post("/webhook/:randomNumber", async (req, res) => {
  const payload = req.body;
  console.log(payload);
  const randomNumber = req.params.randomNumber;
  console.log(randomNumber);

  const getUrlIdQuery = "SELECT id FROM webhook_urls WHERE url = ?";
  try {
    const connection: Connection = await pool.getConnection();
    // console.log(getUrlIdQuery, [`/webhook/${randomNumber}`]);
    const results = await connection.query(getUrlIdQuery, [
      `/webhook/${randomNumber}`,
    ]);
    // console.log(results);
    const webhookUrlId = results[0][0].id;
    // console.log(webhookUrlId);
    const insertQuery =
      "INSERT INTO webhook_events (webhook_url_id, payload) VALUES (?, ?)";
    await connection.query(insertQuery, [
      webhookUrlId,
      JSON.stringify(payload),
    ]);

    // Parse data
    const webhook_url = `/webhook/${randomNumber}`;
    try {
      var eventType = req.headers["x-github-event"];
    } catch (err) {
      console.log("Not github event.");
    }

    if (eventType === "issues") {
      const {
        html_url: issueUrl,
        title,
        created_at,
        updated_at,
      } = req.body.issue;
      const { login } = req.body.sender; // Sender name
      const { name } = req.body.repository; // Repository name
      const { html_url: repositoryUrl } = req.body.repository.owner; // repository URL
      const formattedDatetime_created = new Date(created_at)
        .toISOString()
        .slice(0, 19)
        .replace("T", " ");
      const formattedDatetime_updated = new Date(updated_at)
        .toISOString()
        .slice(0, 19)
        .replace("T", " ");
      const issueSQL =
        "INSERT INTO webhook_summary (type, webhook_url, repo, repo_url, title, created_at, updated_at, person, item_url) VALUES (?, ?, ?, ?, ?, ?, ?, ?,?)";
      await connection.query(issueSQL, [
        "Issue",
        webhook_url,
        name,
        repositoryUrl,
        title,
        formattedDatetime_created,
        formattedDatetime_updated,
        login,
        issueUrl,
      ]);
    } else if (eventType === "push") {
      const { updated_at } = req.body.repository;
      const { message } = req.body.head_commit;
      const { name: pushername } = req.body.pusher; // Sender name
      const { name } = req.body.repository; // Repository name
      const { html_url: repositoryUrl } = req.body.repository.owner; // repository URL
      const formattedDatetime = new Date(updated_at)
        .toISOString()
        .slice(0, 19)
        .replace("T", " ");
      const eventSQL =
        "INSERT INTO webhook_summary (type, webhook_url, repo, repo_url, title, created_at, updated_at, person) VALUES (?, ?, ?, ?, ?, ?, ?,?)";
      await connection.query(eventSQL, [
        "Push",
        webhook_url,
        name,
        repositoryUrl,
        message,
        formattedDatetime,
        formattedDatetime,
        pushername,
      ]);
    }
    connection.release();
    console.log("Data saved to database");
    res.status(200).send("Webhook received");
  } catch (err) {
    console.error("Error inserting data into the database:", err);
    res.status(500).send("Error saving data");
  }
});

// Test : curl -X GET http://localhost:3000/webhook/api/webhook-events
webhookRouter.get("/webhook/api/webhook-events", async (req, res) => {
  const token = req.headers["authorization"] ?? null;
  const query = `
        SELECT we.id, wu.name, we.payload, we.created_at 
        FROM webhook_events we 
        JOIN webhook_urls wu ON we.webhook_url_id = wu.id WHERE wu.user_id = ? ORDER BY we.created_at DESC`;
  try {
    const userId = await contextUser.getUserId(token);
    if (userId == null) {
      res.status(401).send("Unauthorized. Cannot get User ID.");
    }
    // console.log(userId)
    const connection: Connection = await pool.getConnection();
    const [results] = await connection.query(query, [userId]);
    // console.log(query, [userId])
    connection.release();
    res.status(200).json(results);
  } catch (err) {
    console.error("Error fetching events from the database:", err);
    res.status(500).send("Error fetching events");
  }
});

webhookRouter.get("/webhook/api/webhook-summary", async (req, res) => {
  const token = req.headers["authorization"] ?? null;
  const query = `SELECT type, repo,repo_url,type,title,item_url,person,created_at,updated_at, webhook_url from webhook_summary where webhook_url in (SELECT url from webhook_urls WHERE user_id = ?) ORDER BY updated_at DESC`;
  try {
    const userId = await contextUser.getUserId(token);
    if (userId == null) {
      res.status(401).send("Unauthorized. Cannot get User ID.");
    }
    // console.log(userId)
    const connection: Connection = await pool.getConnection();
    const [results] = await connection.query(query, [userId]);
    // console.log(query, [userId]);
    // console.log(results);
    connection.release();
    res.status(200).json(results);
  } catch (err) {
    console.error("Error fetching events from the database:", err);
    res.status(500).send("Error fetching events");
  }
});

// Test : curl -X GET http://localhost:3000/webhook/api/webhooks
webhookRouter.get("/webhook/api/webhooks", async (req, res) => {
  const token = req.headers["authorization"] ?? null;
  const query = `
        SELECT id, url, name, created_at 
        FROM webhook_urls WHERE user_id = ?`;

  try {
    const userId = await contextUser.getUserId(token);
    if (userId == null) {
      res.status(401).send("Unauthorized. Cannot get User ID.");
    }
    const connection: Connection = await pool.getConnection();
    const [results] = await connection.query(query, [userId]);
    connection.release();
    res.status(200).json(results);
  } catch (err) {
    console.error("Error fetching events from the database:", err);
    res.status(500).send("Error fetching events");
  }
});

// ? Test : curl -X GET http://localhost:3000/webhook/api/webhooks
webhookRouter.post("/webhook/api/webhook-delete/:idnum", async (req, res) => {
  const idnum = req.params.idnum;
  // console.log(idnum);

  // Get URL first for delete in Event
  // Delete from both Event and URL
  const queryEventID = `
        SELECT we.id
        FROM webhook_events we 
        JOIN webhook_urls wu ON we.webhook_url_id = wu.id WHERE wu.id = ?`;
  const queryURL = `
        SELECT url
        FROM webhook_urls WHERE id = ?`;
  const DeleteFromURL = "DELETE FROM webhook_urls WHERE url = ?";
  const DeleteFromEVENT = "DELETE FROM webhook_events WHERE id = ?";
  try {
    const connection: Connection = await pool.getConnection();
    const resultsEventTable = await connection.query(queryEventID, [
      `${idnum}`,
    ]);
    const resultsURLTable = await connection.query(queryURL, [`${idnum}`]);
    // console.log(results);
    if (resultsEventTable[0].length === 0) {
      console.log("Event table founds no ID.");
    } else {
      resultsEventTable[0].forEach(async (elem) => {
        const results3 = await connection.query(DeleteFromEVENT, [
          `${elem.id}`,
        ]);
        // console.log(results3);
      });
    }
    if (resultsURLTable[0].length === 0) {
      console.log("URL table founds no ID.");
    } else {
      resultsURLTable[0].forEach(async (elem) => {
        const results2 = await connection.query(DeleteFromURL, [`${elem.url}`]);
        // console.log(results2);
      });
    }
    res.status(200);
  } catch (err) {
    console.error("Error fetching events from the database:", err);
    res.status(500).send("Error fetching events");
  }
});

// webhookRouter.get('/webhook/api/get-user-id', async (req, res) => {
//     const token = req.headers["authorization"]??null;
//     console.log(token);
//     try {
//         const userId = await contextUser.getUserId(token);
//         if (userId !== null) {
//             res.status(200).json({ userId });
//         } else {
//             res.status(401).send('Unauthorized');
//         }
//     } catch (err) {
//         console.error('Error getting user ID:', err);
//         res.status(500).send('Internal Server Error');
//     }
// });
