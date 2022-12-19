CREATE SCHEMA IF NOT EXISTS `green_commute_user_service` DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci ;
USE `green_commute_job_service` ;

CREATE TABLE IF NOT EXISTS `green_commute_user_service`.`user` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `user_name` VARCHAR(45) NULL DEFAULT NULL,
  `email` VARCHAR(45) NULL DEFAULT NULL,
  `user_password` VARCHAR(45) NULL DEFAULT NULL,
  `user_resume` VARCHAR(45) NULL DEFAULT NULL,
  PRIMARY KEY (`id`))
ENGINE = InnoDB
AUTO_INCREMENT = 13
DEFAULT CHARACTER SET = utf8mb4
COLLATE = utf8mb4_0900_ai_ci;

INSERT INTO `green_commute_user_service`.`user` (user_name,email,user_password,user_resume) VALUES
("Sai Srinivas","msaisrinivas08@gmail.com","sai@123","sai.jpg"),
("Yashwanth Lal","yashlal@gmail.com","lal@123","lal.jpg"),
("Shaik Arifa","sarifa@gmail.com","ari@123","ari.jpg"),
("Sudhakar","sudhakar@gmail.com","sud@123","sud.jpg");