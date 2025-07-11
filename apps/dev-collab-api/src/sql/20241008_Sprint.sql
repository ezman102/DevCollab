CREATE TABLE
    Sprint (
        `sprintId` int NOT NULL AUTO_INCREMENT,
        `projectId` int NOT NULL,
        `startDate` DATETIME,
        `endDate` DATETIME,
        PRIMARY KEY (`sprintId`)
    );

ALTER TABLE `Sprint` ADD CONSTRAINT `FK_ProjectSprint` FOREIGN KEY (`projectId`) REFERENCES `Project` (`projectId`);