CREATE SCHEMA IF NOT EXISTS `green_commute_location_service` DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci ;
USE `green_commute_location_service` ;

CREATE TABLE IF NOT EXISTS `green_commute_location_service`.`location` (
  `id` INT NOT NULL,
  `city` VARCHAR(45) NULL DEFAULT NULL,
  `area` VARCHAR(45) NULL DEFAULT NULL,
  `zip_code` VARCHAR(45) NULL DEFAULT NULL,
  `state_name` VARCHAR(45) NULL DEFAULT NULL,
  `distance` VARCHAR(45) NULL DEFAULT NULL,
  PRIMARY KEY (`id`))
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8mb4
COLLATE = utf8mb4_0900_ai_ci;

INSERT INTO `green_commute_location_service`.`location` (id,city,area,zip_code,state_name,distance) VALUES
(1,"Hyderabad","Ameerpet","503111","Telangana","0 - 10 kms"),
(2,"Hyderabad","Begumpet","500435","Telangana","11 - 20 kms"),
(3,"Hyderabad","East Marredpally","503053","Telangana","21 - 30 kms"),
(4,"Mumbai","Pleasant Park","503053","Maharastra","31 - 40 kms"),
(5,"Mumbai","Pleasant Park","503053","Maharastra","11 - 20 kms");