CREATE TABLE webhook_summary (
    `webhook_url` VARCHAR(255) NOT NULL,
    `repo` VARCHAR(255) NOT NULL,
    `repo_url` VARCHAR(255) NOT NULL,
    `type` VARCHAR(255) NOT NULL,
    `title` VARCHAR(255),
    `brief` VARCHAR(500),
    `item_url` VARCHAR(255),
    `person` VARCHAR(255),
    `created_at` TIMESTAMP,
    `updated_at` TIMESTAMP
);
