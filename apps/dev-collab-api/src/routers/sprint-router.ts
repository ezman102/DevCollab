import express from "express";
import { SprintCreateCommand, SprintUpdateCommand } from "shared/models/sprint";
import { appContainer } from "../container/container";
import { TYPES } from "../container/types";

export const sprintRouter = express.Router();

sprintRouter.get("/api/projects/:projectId/sprints", async (req, res) => {
  const service = appContainer.get(TYPES.ISprintService);
  const projectId = parseInt(req.params.projectId);

  const result = await service.getProjectSprints(projectId);

  res.send(result);
});

sprintRouter.post("/api/projects/:projectId/sprints", async (req, res) => {
  const command = req.body as SprintCreateCommand;
  const service = appContainer.get(TYPES.ISprintService);
  const projectId = parseInt(req.params.projectId);

  const result = await service.createSprint(projectId, command);

  res.send(result.toString());
});

sprintRouter.patch("/api/sprints/:sprintId", async (req, res) => {
  const command = req.body as SprintUpdateCommand;
  const sprintId = parseInt(req.params.sprintId);
  const service = appContainer.get(TYPES.ISprintService);

  await service.updateSprint(sprintId, command);

  res.send(200);
});

sprintRouter.delete("/api/sprints/:sprintId", async (req, res) => {
  const sprintId = parseInt(req.params.sprintId);
  const service = appContainer.get(TYPES.ISprintService);

  await service.removeSprint(sprintId);

  res.send(200);
});
