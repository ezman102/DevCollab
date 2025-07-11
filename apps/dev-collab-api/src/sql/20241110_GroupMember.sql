ALTER TABLE `DevCollab`.`group_member` 
CHANGE COLUMN `permission_id` `permission_id` INT NOT NULL DEFAULT 0 ;
ALTER TABLE `DevCollab`.`group_member` 
CHANGE COLUMN `join_date` `join_date` TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP() ;
