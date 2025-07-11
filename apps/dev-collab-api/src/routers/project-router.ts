import express from "express";
import {
  ProjectCreateCommand,
  ProjectUpdateCommand,
} from "shared/models/project";
import { appContainer } from "../container/container";
import { TYPES } from "../container/types";

export const projectRouter = express.Router();

projectRouter.get("/api/projects/:projectId", async (req, res) => {
  const service = appContainer.get(TYPES.IProjectService);
  const projectId = parseInt(req.params.projectId);
  const result = await service.getProject(projectId);

  res.send(result);
});

projectRouter.get("/api/projects", async (req, res) => {
  const token = req.headers["authorization"]??null;
  const service = appContainer.get(TYPES.IProjectService);
  const result = await service.getAllProjects(token);

  res.send(result);
});

projectRouter.post("/api/projects", async (req, res) => {
  const token = req.headers["authorization"]??null;
  const command = req.body as ProjectCreateCommand;
  const service = appContainer.get(TYPES.IProjectService);

  const result = await service.createProject(command, token);

  res.send(result.toString());
});

projectRouter.patch("/api/projects/:projectId", async (req, res) => {
  const command = req.body as ProjectUpdateCommand;
  const projectId = parseInt(req.params.projectId);
  const service = appContainer.get(TYPES.IProjectService);

  await service.updateProject(projectId, command);

  res.send(200);
});

projectRouter.delete("/api/projects/:projectId", async (req, res) => {
  const projectId = parseInt(req.params.projectId);
  const service = appContainer.get(TYPES.IProjectService);

  await service.removeProject(projectId);

  res.send(200);
});
