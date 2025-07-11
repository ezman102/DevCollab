ALTER TABLE `Project` ADD creatorId int;

ALTER TABLE `Project` ADD CONSTRAINT `FK_Project_User` FOREIGN KEY (`creatorId`) REFERENCES `users` (`user_id`);