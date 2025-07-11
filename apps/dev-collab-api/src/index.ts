import "reflect-metadata"; // Required for TypeORM and decorators
import bodyParser from "body-parser"; // Middleware for parsing incoming JSON requests
import express from "express"; // Express framework for handling HTTP routes
import "express-async-errors"; // Middleware for handling async errors
import { HomeMessageModel } from "shared/models/home"; // Your shared model for Home message response
import { AppDataSource } from "./db/db-datasrc"; // TypeORM DataSource instance for connecting to MySQL
import { createHttpErrorHandler } from "./errors/http-error-handler"; // Custom error handler middleware
import { taskRouter } from "./routers/task-router"; // Project router
import { projectRouter } from "./routers/project-router"; // Project router
import { userRouter } from "./routers/user-router"; // User router
import { sprintRouter } from "./routers/sprint-router"; // Sprint router
import { userStoryRouter } from "./routers/userStory-router"; // Import userStoryRouter
import { CommentRouter } from "./routers/comment-router"; // Import CommentRouter
import { CommentService } from "./services/comment-service"; // Import CommentService
import { groupRouter } from "./routers/group-router";// Import Group Router
import { DbContext } from "./db/db-context"; // Import DbContext
import { createServer } from "http"; // For Automation Github
import { webhookRouter } from './routers/webhook-router'; // For Automation Github
import { NotificationRouter } from "./routers/notification-router"; // Import NotificationRouter
import { NotificationService } from "./services/notification-service"; // Import NotificationService
const cors = require('cors'); // For Automation Github
const setupChatbot = require('./function/chatbot'); // For Chatbot
const envConfig = require(`./config/config.${process.env.NODE_ENV || "dev"}.json`);

// For Automation with GitHub WebSocket setup
import http from "http"; // HTTP server from Node.js
import { Server as WebSocketServer } from "ws"; // WebSocket server implementation from 'ws' library
import { projectUserRouter } from "./routers/project-user-router";
import { appUserRouter } from "./routers/app-user-router";

const env = process.env.NODE_ENV || "dev";
const app = express(); // Create Express app instance
const port = envConfig.PORT; // Set port number for the server

app.use(cors()); // For Automation Github - Allow requests from all origins

// Middleware
app.use(bodyParser.json({ limit: '50mb' })); // Middleware to parse incoming JSON requests

// Simple Home route for test
app.get("/api/home/messages", (req, res) => {
  res.send(["Hello World!", "Test from Home"] satisfies HomeMessageModel); // Home message model (ensure that `HomeMessageModel` is defined in your project)
});


// Initialize DbContext with TypeORM manager
const dbContext = new DbContext(AppDataSource.manager);

const commentService = new CommentService(dbContext);
const commentRouter = new CommentRouter(commentService).initializeRoutes();
const notificationService = new NotificationService(dbContext);
const notificationRouter = new NotificationRouter(notificationService).initializeRoutes();

// Register Routers (APIs)
app.use("/", projectRouter); // Project-related routes
app.use("/", userRouter); // User-related routes
app.use("/", sprintRouter); // Sprint-related routes
app.use("/", groupRouter);
app.use("/", webhookRouter); // For Automation Github
app.use("/", commentRouter);
app.use("/", taskRouter); // Task-related routes
app.use("/", notificationRouter); // Task-related routes
app.use("/", projectUserRouter);
app.use("/", appUserRouter);
app.use("/api/userstory", userStoryRouter); // Register the userStoryRouter directly

// Register error handling middleware for HTTP errors
app.use(createHttpErrorHandler());

// Use env specific config
app.use((req: any, res, next) => {
    req.envConfig = envConfig;
    next();
});

// WebSocket setup for real-time communications (For Automation GitHub)
const server = http.createServer(app); // Create HTTP server from Express app

// Initialize Chatbot
const wss = setupChatbot(server);

// Initialize TypeORM DataSource (Database Connection)
AppDataSource.initialize()
    .then(() => {
        // Once the database connection is successful, start the server
        server.listen(port, () => {
            console.log(`Server is listening on port ${port}`);
        });
    })
    .catch((error) => {
        // Handle any errors during DataSource initialization
        console.error("Error during Data Source initialization", error);
    });
