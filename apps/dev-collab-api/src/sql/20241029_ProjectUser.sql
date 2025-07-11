CREATE TABLE
    ProjectUser (
        `projectId` int NOT NULL,
        `userId` int NOT NULL,
        PRIMARY KEY (`projectId`, `userId`)
    );

ALTER TABLE `ProjectUser` ADD CONSTRAINT `FK_ProjectUser_ProjectId` FOREIGN KEY (`projectId`) REFERENCES `Project` (`projectId`);
ALTER TABLE `ProjectUser` ADD CONSTRAINT `FK_ProjectUser_UserId` FOREIGN KEY (`userId`) REFERENCES `users` (`user_id`);