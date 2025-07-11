CREATE TABLE `verification` (
  `verify_id` int(11) NOT NULL AUTO_INCREMENT,
  `email` varchar(1000) DEFAULT NULL,
  `verification_code` varchar(1000) DEFAULT NULL,
  `expire_time` datetime DEFAULT (current_timestamp() + interval 600 second),
  `create_time` datetime DEFAULT current_timestamp(),
  `verify_state` varchar(45) DEFAULT 'WAITING',
  PRIMARY KEY (`verify_id`)
) 
