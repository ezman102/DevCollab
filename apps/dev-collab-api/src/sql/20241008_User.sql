CREATE TABLE users (
    user_id INT NOT NULL AUTO_INCREMENT,
    name VARCHAR(255),
    email VARCHAR(255) UNIQUE,
    password VARCHAR(255),
    email_2fa BOOLEAN DEFAULT FALSE,
    last_activity_time TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    last_password_modify TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    create_time TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    PRIMARY KEY (user_id)
) AUTO_INCREMENT=1000; -- Set the starting value for user_id # 1000