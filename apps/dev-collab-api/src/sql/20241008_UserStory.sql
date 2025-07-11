CREATE TABLE `UserStory` (
    `userStoryId` INT NOT NULL AUTO_INCREMENT,
    `title` VARCHAR(255) NOT NULL,
    `asA` VARCHAR(255) NOT NULL,
    `iWantTo` VARCHAR(255) NOT NULL,
    `soThat` VARCHAR(255) NOT NULL,
    `priority` ENUM('Low', 'Medium', 'High') NOT NULL DEFAULT 'Medium',
    `dueDate` TIMESTAMP NULL,
    `upvoteCount` INT DEFAULT 0,   
    `downvoteCount` INT DEFAULT 0, 
    `projectId` INT NULL,
    `sprintId` INT NULL,
    PRIMARY KEY (`userStoryId`),
    CONSTRAINT `FK_UserStory_Project` FOREIGN KEY (`projectId`) REFERENCES `Project`(`projectId`) ON DELETE SET NULL ON UPDATE CASCADE,
    CONSTRAINT `FK_UserStory_Sprint` FOREIGN KEY (`sprintId`) REFERENCES `Sprint`(`sprintId`) ON DELETE SET NULL ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

INSERT INTO `UserStory` (title, asA, iWantTo, soThat, priority, dueDate, upvoteCount, downvoteCount)
VALUES ('Improve Search Function', 'user', 'be able to search for specific products', 'find what I need quickly', 'High', '2024-10-15 10:00:00', 10, 2);

INSERT INTO `UserStory` (title, asA, iWantTo, soThat, priority, dueDate, upvoteCount, downvoteCount)
VALUES ('Add Dark Mode', 'developer', 'implement dark mode', 'users can reduce eye strain', 'Medium', '2024-11-01 12:00:00', 15, 3);

INSERT INTO `UserStory` (title, asA, iWantTo, soThat, priority, dueDate, upvoteCount, downvoteCount)
VALUES ('Optimize Load Time', 'website owner', 'optimize page load time', 'users can navigate faster', 'High', '2024-12-01 09:00:00', 20, 4);

INSERT INTO `UserStory` (title, asA, iWantTo, soThat, priority, dueDate, upvoteCount, downvoteCount)
VALUES ('Enhance Security Features', 'security officer', 'implement better encryption', 'sensitive data is protected', 'High', '2024-12-15 14:00:00', 8, 0);

INSERT INTO `UserStory` (title, asA, iWantTo, soThat, priority, dueDate, upvoteCount, downvoteCount)
VALUES ('Improve Mobile Responsiveness', 'mobile user', 'website to work better on my phone', 'easily navigate on small screens', 'Medium', '2024-11-20 16:30:00', 12, 1);

INSERT INTO `UserStory` (title, asA, iWantTo, soThat, priority, dueDate, upvoteCount, downvoteCount)
VALUES ('Integrate Payment Gateway', 'business owner', 'integrate a new payment gateway', 'offer more payment options', 'High', '2024-11-05 11:00:00', 25, 5);

INSERT INTO `UserStory` (title, asA, iWantTo, soThat, priority, dueDate, upvoteCount, downvoteCount)
VALUES ('Create User Feedback System', 'product manager', 'create a user feedback system', 'users can provide suggestions and report bugs', 'Low', '2024-10-28 08:00:00', 5, 2);

INSERT INTO `UserStory` (title, asA, iWantTo, soThat, priority, dueDate, upvoteCount, downvoteCount)
VALUES ('Redesign Homepage', 'designer', 'redesign the homepage', 'it looks more modern and user-friendly', 'Medium', '2024-12-20 17:00:00', 18, 4);

INSERT INTO `UserStory` (title, asA, iWantTo, soThat, priority, dueDate, upvoteCount, downvoteCount)
VALUES ('Add Multi-language Support', 'international user', 'site to support multiple languages', 'view content in my native language', 'High', '2024-12-10 13:00:00', 22, 6);

