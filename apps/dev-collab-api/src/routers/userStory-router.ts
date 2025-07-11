// routers/userStory-router.ts
import { Router } from "express";
import { appContainer } from "../container/container"; // Import DI container
import { TYPES } from "../container/types"; // Import TYPES for DI
import { IUserStoryService } from "../services/userStory-service"; // Import IUserStoryService interface

export const userStoryRouter = Router();

// Retrieve the UserStoryService instance from the DI container
const userStoryService = appContainer.get<IUserStoryService>(TYPES.IUserStoryService);

// Define routes

// Get all user stories
userStoryRouter.get("/", async (req, res) => {
  try {
    const userStories = await userStoryService.getAllUserStories();
    res.status(200).json(userStories);
  } catch (error) {
    res.status(500).json({ message: "Failed to retrieve user stories", error });
  }
});

// Create a new user story
userStoryRouter.post("/", async (req, res) => {
  try {
    const userStory = await userStoryService.createUserStory(req.body);
    res.status(201).json(userStory);
  } catch (error) {
    res.status(500).json({ message: "Failed to create user story", error });
  }
});

// Get a user story by ID
userStoryRouter.get("/:id", async (req, res) => {
  try {
    const userStory = await userStoryService.getUserStoryById(Number(req.params.id));
    if (userStory) {
      res.status(200).json(userStory);
    } else {
      res.status(404).json({ message: "User story not found" });
    }
  } catch (error) {
    res.status(500).json({ message: "Failed to retrieve user story", error });
  }
});

// Update a user story by ID
userStoryRouter.put("/:id", async (req, res) => {
  try {
    const updatedUserStory = await userStoryService.updateUserStory(Number(req.params.id), req.body);
    if (updatedUserStory) {
      res.status(200).json(updatedUserStory);
    } else {
      res.status(404).json({ message: "User story not found" });
    }
  } catch (error) {
    res.status(500).json({ message: "Failed to update user story", error });
  }
});

// Delete a user story by ID
userStoryRouter.delete("/:id", async (req, res) => {
  try {
    await userStoryService.deleteUserStory(Number(req.params.id));
    res.status(204).send();
  } catch (error) {
    res.status(500).json({ message: "Failed to delete user story", error });
  }
});

// Upvote a user story by ID
userStoryRouter.post("/:id/upvote", async (req, res) => {
  try {
    const updatedUserStory = await userStoryService.upvoteUserStory(Number(req.params.id));
    if (updatedUserStory) {
      res.status(200).json(updatedUserStory);
    } else {
      res.status(404).json({ message: "User story not found" });
    }
  } catch (error) {
    res.status(500).json({ message: "Failed to upvote user story", error });
  }
});

// Downvote a user story by ID
userStoryRouter.post("/:id/downvote", async (req, res) => {
  try {
    const updatedUserStory = await userStoryService.downvoteUserStory(Number(req.params.id));
    if (updatedUserStory) {
      res.status(200).json(updatedUserStory);
    } else {
      res.status(404).json({ message: "User story not found" });
    }
  } catch (error) {
    res.status(500).json({ message: "Failed to downvote user story", error });
  }
});
