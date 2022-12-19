
CREATE SCHEMA IF NOT EXISTS `green_commute_job_service` DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci ;
USE `green_commute_job_service` ;

CREATE TABLE IF NOT EXISTS `green_commute_job_service`.`skill` (
  `id_skill` INT NOT NULL AUTO_INCREMENT,
  `skill_name` VARCHAR(45) NULL DEFAULT NULL,
  PRIMARY KEY (`id_skill`))
ENGINE = InnoDB
AUTO_INCREMENT = 1
DEFAULT CHARACTER SET = utf8mb4
COLLATE = utf8mb4_0900_ai_ci;

CREATE TABLE IF NOT EXISTS `green_commute_job_service`.`job` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `job_title` VARCHAR(45) NULL DEFAULT NULL,
  `company_name` VARCHAR(45) NULL DEFAULT NULL,
  `posted_date` VARCHAR(45) NULL DEFAULT NULL,
  `due_date` DATETIME NULL DEFAULT NULL,
  `id_skill` INT NULL DEFAULT NULL,
  `location_id` INT NULL DEFAULT NULL,
  PRIMARY KEY (`id`),
  INDEX `fk_Jobs_1_idx` (`id_skill` ASC) VISIBLE,
  CONSTRAINT `fk_Jobs_1`
    FOREIGN KEY (`id_skill`)
    REFERENCES `green_commute_job_service`.`skill` (`id_skill`))
ENGINE = InnoDB
AUTO_INCREMENT = 1
DEFAULT CHARACTER SET = utf8mb4
COLLATE = utf8mb4_0900_ai_ci;

INSERT INTO `green_commute_job_service`.`skill` (skill_name) VALUES
("UI/UX Designer"),("Graphic Designer"),("Full Stack Devoloper"),("Product Designer"),("Web Devoloper");

INSERT INTO `green_commute_job_service`.`job` (job_title,company_name,posted_date,due_date,id_skill,location_id)
VALUES
("User Experience Designer", "HP", "1hr 36 mins ago","2022-12-10", 1, 1),
("Full Stack Devoloper", "HP", "45 mins ago","2022-12-10", 2, 2),
("User Experience Designer", "BMW", "3 days ago","2022-12-10", 1, 3),
("User Experience Designer", "Myntra", "4 days ago","2022-12-10", 1, 4),
("User Experience Designer", "Twitter", "3 days ago","2022-12-10", 1, 4),
("Full Stack Devoloper", "Wipro", "10 days ago","2022-12-10", 2, 4);