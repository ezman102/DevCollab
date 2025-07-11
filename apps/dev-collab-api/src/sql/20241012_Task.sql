CREATE TABLE Task (
        `taskid` int NOT NULL AUTO_INCREMENT,
        `name` varchar(1000),
        `description` varchar(1000),
        `priority` ENUM('Low', 'Medium', 'High') NOT NULL DEFAULT 'Medium',
        `assignee` varchar(1000)  DEFAULT 'None',
        `status` ENUM('To Do', 'In Progress', 'Done') NOT NULL DEFAULT 'To Do',
        `duedate` DATE,
        `created` DATETIME ,
        `modified` DATETIME ,
        `projectId` INT  NULL ,
        `sprintId` INT  NULL , 
        `Author` INT NOT NULL ,
        PRIMARY KEY (`taskid`),
        CONSTRAINT `FK_Task_Project` FOREIGN KEY (`projectId`) REFERENCES `Project`(`projectId`)  ,
        CONSTRAINT `FK_Task_Sprint` FOREIGN KEY (`sprintId`) REFERENCES `Sprint`(`sprintId`) ,
        CONSTRAINT `FK_Task_Author` FOREIGN KEY (`Author`) REFERENCES `users`(`user_id`)  
);