CREATE TABLE Invitation (
    invitation_id SERIAL PRIMARY KEY,
    group_id INT NOT NULL,
    invitation_code VARCHAR(255) NOT NULL,
    create_time TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    creator_id INT NOT NULL
);