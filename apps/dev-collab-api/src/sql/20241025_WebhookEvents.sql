CREATE TABLE webhook_events (
    `id` INT AUTO_INCREMENT PRIMARY KEY,
    `webhook_url_id` INT NOT NULL,
    `payload` JSON NOT NULL,
    `created_at` TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (`webhook_url_id`) REFERENCES webhook_urls(`id`)
);
