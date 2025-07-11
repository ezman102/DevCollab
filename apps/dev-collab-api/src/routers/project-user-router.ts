import express from "express";
import { ProjectUserAssignCommand } from "shared/models/project-user";
import { appContainer } from "../container/container";
import { TYPES } from "../container/types";

export const projectUserRouter = express.Router();

projectUserRouter.get("/api/project-users/:projectId", async (req, res) => {
  const service = appContainer.get(TYPES.IProjectUserService);
  const projectId = parseInt(req.params.projectId);
  const result = await service.getProjectUsers(projectId);

  res.send(result);
});

projectUserRouter.post("/api/project-users/:projectId", async (req, res) => {
  const command = req.body as ProjectUserAssignCommand;
  const projectId = parseInt(req.params.projectId);
  const service = appContainer.get(TYPES.IProjectUserService);

  await service.assignProjectUser(projectId, command);

  res.send(200);
});

projectUserRouter.delete("/api/project-users/:projectId", async (req, res) => {
  const command = req.body as ProjectUserAssignCommand;
  const projectId = parseInt(req.params.projectId);
  const service = appContainer.get(TYPES.IProjectUserService);

  await service.withdrawProjectUser(projectId, command);

  res.send(200);
});
