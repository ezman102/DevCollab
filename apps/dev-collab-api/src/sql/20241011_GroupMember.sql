CREATE TABLE group_member (
    member_id SERIAL PRIMARY KEY,         -- PK member_id
    group_id INT NOT NULL,                -- FK group_id
    user_id INT NOT NULL,                 -- FK user_id
    permission_id INT NOT NULL,           -- FK permission_id
    join_date TIMESTAMP NOT NULL,         -- join_date
    group_role VARCHAR(255)               -- group_role
);