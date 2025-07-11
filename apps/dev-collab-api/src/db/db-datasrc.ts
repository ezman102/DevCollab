import { DataSource } from "typeorm";
import { Project } from "../entities/project";
import { Verification } from "../entities/verification";
import { Sprint } from "../entities/sprint";
import { UserStory } from "../entities/userStory";
import { User } from "../entities/user";
import { Group } from "../entities/group";
import { GroupMember } from "../entities/groupMember";
import { Task } from "../entities/task";
import { Invitation } from "../entities/Invitation";
import { Comment } from "../entities/comment";
import { Notification } from "../entities/notification";
// AppDataSource: TypeORM configuration
export const AppDataSource = new DataSource({
  type: "mysql",
  host: "0.0.0.0",
  port: 3306,
  username: "root",
  password: "P@ssw0rd",
  database: "DevCollab",
  synchronize: false,
  logging: true, // Enable logging for debugging purposes
  entities: [Project, Sprint, Verification, UserStory, User, Group, GroupMember, Task, Invitation, Comment, Notification],  // Your entity classes
  subscribers: [],
  migrations: [],
  timezone: "Z",
});
