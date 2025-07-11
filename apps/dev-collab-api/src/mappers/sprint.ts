import { SprintModel } from "shared/models/sprint";
import { Sprint } from "../entities/sprint";

export const mapSprintToSprintModel = (
  sprint: Sprint,
  sprintNo: number | null,
  now: string
): SprintModel =>
  ({
    sprintId: sprint.sprintId,
    projectId: sprint.projectId || null,
    startDate: sprint.startDate?.toISOString() || null,
    endDate: sprint.endDate?.toISOString() || null,
    sprintNo: sprintNo,
    isEnded: sprint.isEnded(now),
    isCurrent: sprint.isCurrent(now),
  }) satisfies SprintModel;
