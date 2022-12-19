CREATE SCHEMA IF NOT EXISTS `green_commute_users_jobs_service` DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci ;
USE `green_commute_users_jobs_service` ;

CREATE TABLE IF NOT EXISTS `green_commute_users_jobs_service`.`user_job` (
	id_user INT NOT NULL,
    id_job INT NOT NULL,
    is_saved tinyint(1) DEFAULT 0,
    is_applied tinyint(1) DEFAULT 0)
ENGINE = InnoDB
AUTO_INCREMENT = 6
DEFAULT CHARACTER SET = utf8mb4
COLLATE = utf8mb4_0900_ai_ci;

INSERT INTO `green_commute_users_jobs_service`.`user_job` (id_user,id_job,is_saved,is_applied) VALUES
(1,1,1,0), (1,2,0,1),(2,1,1,0),(2,2,0,1);