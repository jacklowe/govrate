-- MySQL Workbench Forward Engineering

SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0;
SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0;
SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION';

-- -----------------------------------------------------
-- Schema mydb
-- -----------------------------------------------------
-- -----------------------------------------------------
-- Schema govrate
-- -----------------------------------------------------

-- -----------------------------------------------------
-- Schema govrate
-- -----------------------------------------------------
CREATE SCHEMA IF NOT EXISTS `govrate` DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci ;
USE `govrate` ;

-- -----------------------------------------------------
-- Table `govrate`.`govs`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `govrate`.`govs` (
  `govId` INT(11) NOT NULL AUTO_INCREMENT,
  `country` VARCHAR(55) NOT NULL,
  PRIMARY KEY (`govId`))
ENGINE = InnoDB
AUTO_INCREMENT = 11
DEFAULT CHARACTER SET = utf8mb4
COLLATE = utf8mb4_0900_ai_ci;


-- -----------------------------------------------------
-- Table `govrate`.`users`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `govrate`.`users` (
  `userId` INT(11) NOT NULL AUTO_INCREMENT,
  `email` VARCHAR(255) NOT NULL,
  `username` VARCHAR(45) NOT NULL,
  `password` VARCHAR(255) NOT NULL,
  `isAdmin` TINYINT(1) NOT NULL DEFAULT '0',
  PRIMARY KEY (`userId`),
  UNIQUE INDEX `email_UNIQUE` (`email` ASC) VISIBLE,
  UNIQUE INDEX `username_UNIQUE` (`username` ASC) VISIBLE)
ENGINE = InnoDB
AUTO_INCREMENT = 28
DEFAULT CHARACTER SET = utf8mb4
COLLATE = utf8mb4_0900_ai_ci;


-- -----------------------------------------------------
-- Table `govrate`.`reviews`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `govrate`.`reviews` (
  `reviewId` INT(11) NOT NULL AUTO_INCREMENT,
  `userId` INT(11) NOT NULL,
  `govId` INT(11) NOT NULL,
  `rating` TINYINT(4) NOT NULL,
  `body` VARCHAR(1000) NULL DEFAULT NULL,
  PRIMARY KEY (`reviewId`),
  INDEX `fk_reviews_users_idx` (`userId` ASC) VISIBLE,
  INDEX `fk_reviews_govs1_idx` (`govId` ASC) VISIBLE,
  CONSTRAINT `fk_reviews_govs1`
    FOREIGN KEY (`govId`)
    REFERENCES `govrate`.`govs` (`govId`),
  CONSTRAINT `fk_reviews_users`
    FOREIGN KEY (`userId`)
    REFERENCES `govrate`.`users` (`userId`))
ENGINE = InnoDB
AUTO_INCREMENT = 10
DEFAULT CHARACTER SET = utf8mb4
COLLATE = utf8mb4_0900_ai_ci;

USE `govrate`;

DELIMITER $$
USE `govrate`$$
CREATE
DEFINER=`root`@`localhost`
TRIGGER `govrate`.`before_gov_delete`
BEFORE DELETE ON `govrate`.`govs`
FOR EACH ROW
BEGIN
 DELETE FROM reviews
 WHERE govId = OLD.govId;
END$$


DELIMITER ;

SET SQL_MODE=@OLD_SQL_MODE;
SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS;
SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS;
