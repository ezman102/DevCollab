CREATE TABLE
    Project (
        `projectId` int NOT NULL AUTO_INCREMENT,
        `name` varchar(1000),
        `description` varchar(1000),
        `avatar` varchar(10000),
        `created` DATETIME,
        `modified` DATETIME,
        PRIMARY KEY (`projectId`)
    );