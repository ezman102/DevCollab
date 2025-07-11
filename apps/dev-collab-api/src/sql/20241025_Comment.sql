CREATE TABLE comment (
    comment_id INT PRIMARY KEY AUTO_INCREMENT,
    project_id INT NULL,
    task_id INT NULL,
    comment VARCHAR(255) NOT NULL,
    author_user_id INT NOT NULL,
    create_date TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- INSERT INTO comment (project_id, task_id, comment, author_user_id, create_date) VALUES
--     (1, 1, 'Initial project setup completed', 1001, '2024-01-15 09:00:00'),
--     (1, 1, 'Need to review the requirements', 1002, '2024-01-15 10:30:00'),
--     (1, 1, 'Database schema looks good', 1001, '2024-01-16 11:00:00'),
--     (1, 1, 'Added new indexes for performance', 1003, '2024-01-16 14:15:00'),
--     (2, 2, 'UI design review pending', 1002, '2024-01-17 09:45:00'),
--     (2, 2, 'Colors need to be adjusted', 1001, '2024-01-17 13:20:00'),
--     (2, 2, 'Mobile responsive issues fixed', 1003, '2024-01-18 10:00:00'),
--     (3, 3, 'Testing completed for login module', 1004, '2024-01-18 16:30:00'),
--     (3, 3, 'API documentation updated', 1001, '2024-01-19 11:45:00'),
--     (3, 3, 'New endpoints added for user management', 1001, '2024-01-19 14:00:00');