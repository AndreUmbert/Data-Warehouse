-- MySQL Workbench Forward Engineering

SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0;
SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0;
SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION';

-- -----------------------------------------------------
-- Schema mydb
-- -----------------------------------------------------
-- -----------------------------------------------------
-- Schema data_warehouse
-- -----------------------------------------------------

-- -----------------------------------------------------
-- Schema data_warehouse
-- -----------------------------------------------------
CREATE SCHEMA IF NOT EXISTS `data_warehouse` DEFAULT CHARACTER SET utf8mb4 ;
USE `data_warehouse` ;

-- -----------------------------------------------------
-- Table `data_warehouse`.`region`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `data_warehouse`.`region` (
  `id` INT(11) NOT NULL AUTO_INCREMENT,
  `regionName` VARCHAR(45) NOT NULL,
  PRIMARY KEY (`id`))
ENGINE = InnoDB
AUTO_INCREMENT = 20
DEFAULT CHARACTER SET = utf8mb4;


-- -----------------------------------------------------
-- Table `data_warehouse`.`country`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `data_warehouse`.`country` (
  `id` INT(11) NOT NULL AUTO_INCREMENT,
  `countryName` VARCHAR(45) NOT NULL,
  `regionId` INT(11) NOT NULL,
  PRIMARY KEY (`id`),
  INDEX `fk_country_region1_idx` (`regionId` ASC) VISIBLE,
  CONSTRAINT `fk_country_region1`
    FOREIGN KEY (`regionId`)
    REFERENCES `data_warehouse`.`region` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB
AUTO_INCREMENT = 63
DEFAULT CHARACTER SET = utf8mb4;


-- -----------------------------------------------------
-- Table `data_warehouse`.`city`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `data_warehouse`.`city` (
  `id` INT(11) NOT NULL AUTO_INCREMENT,
  `cityName` VARCHAR(45) NOT NULL,
  `countryId` INT(11) NOT NULL,
  PRIMARY KEY (`id`),
  INDEX `fk_city_country1_idx` (`countryId` ASC) VISIBLE,
  CONSTRAINT `fk_city_country1`
    FOREIGN KEY (`countryId`)
    REFERENCES `data_warehouse`.`country` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB
AUTO_INCREMENT = 80
DEFAULT CHARACTER SET = utf8mb4;


-- -----------------------------------------------------
-- Table `data_warehouse`.`rol`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `data_warehouse`.`rol` (
  `id` INT(11) NOT NULL AUTO_INCREMENT,
  `rol` VARCHAR(45) NOT NULL,
  PRIMARY KEY (`id`))
ENGINE = InnoDB
AUTO_INCREMENT = 3
DEFAULT CHARACTER SET = utf8mb4;


-- -----------------------------------------------------
-- Table `data_warehouse`.`usertable`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `data_warehouse`.`usertable` (
  `id` INT(11) NOT NULL AUTO_INCREMENT,
  `name` VARCHAR(50) NOT NULL,
  `lastname` VARCHAR(50) NOT NULL,
  `email` VARCHAR(100) NOT NULL,
  `password` VARCHAR(45) NOT NULL,
  `rePassword` VARCHAR(45) NOT NULL,
  `profile` VARCHAR(45) NOT NULL,
  `rolId` INT(11) NOT NULL DEFAULT 2,
  PRIMARY KEY (`id`),
  INDEX `fk_User_Rol1_idx` (`rolId` ASC) VISIBLE,
  CONSTRAINT `fk_User_Rol1`
    FOREIGN KEY (`rolId`)
    REFERENCES `data_warehouse`.`rol` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB
AUTO_INCREMENT = 19
DEFAULT CHARACTER SET = utf8mb4;


-- -----------------------------------------------------
-- Table `data_warehouse`.`company`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `data_warehouse`.`company` (
  `id` INT(11) NOT NULL AUTO_INCREMENT,
  `companyName` VARCHAR(200) NOT NULL,
  `address` VARCHAR(200) NOT NULL,
  `email` VARCHAR(45) NOT NULL,
  `phoneNumber` INT(11) NOT NULL,
  `countryId` INT(11) NOT NULL,
  PRIMARY KEY (`id`),
  INDEX `fk_company_country1_idx` (`countryId` ASC) VISIBLE,
  CONSTRAINT `fk_company_country1`
    FOREIGN KEY (`countryId`)
    REFERENCES `data_warehouse`.`country` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB
AUTO_INCREMENT = 17
DEFAULT CHARACTER SET = utf8mb4;


-- -----------------------------------------------------
-- Table `data_warehouse`.`contact`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `data_warehouse`.`contact` (
  `id` INT(11) NOT NULL AUTO_INCREMENT,
  `contactName` VARCHAR(45) NOT NULL,
  `lastname` VARCHAR(45) NOT NULL,
  `position` VARCHAR(45) NOT NULL,
  `username` VARCHAR(45) NOT NULL,
  `email` VARCHAR(45) NOT NULL,
  `interest` INT(11) NOT NULL,
  `address` VARCHAR(200) NOT NULL,
  `companyId` INT(11) NOT NULL,
  `usertableId` INT(11) NOT NULL,
  `cityId` INT(11) NOT NULL,
  PRIMARY KEY (`id`),
  INDEX `fk_contacts_company1_idx` (`companyId` ASC) VISIBLE,
  INDEX `fk_contact_usertable1_idx` (`usertableId` ASC) VISIBLE,
  INDEX `fk_contact_city1_idx` (`cityId` ASC) VISIBLE,
  CONSTRAINT `fk_contact_city1`
    FOREIGN KEY (`cityId`)
    REFERENCES `data_warehouse`.`city` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_contact_usertable1`
    FOREIGN KEY (`usertableId`)
    REFERENCES `data_warehouse`.`usertable` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_contacts_company1`
    FOREIGN KEY (`companyId`)
    REFERENCES `data_warehouse`.`company` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB
AUTO_INCREMENT = 14
DEFAULT CHARACTER SET = utf8mb4;


-- -----------------------------------------------------
-- Table `data_warehouse`.`channel`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `data_warehouse`.`channel` (
  `id` INT(11) NOT NULL AUTO_INCREMENT,
  `channelName` VARCHAR(45) NOT NULL,
  `contactId` INT(11) NOT NULL,
  PRIMARY KEY (`id`),
  INDEX `fk_channel_contacts1_idx` (`contactId` ASC) VISIBLE,
  CONSTRAINT `fk_channel_contacts1`
    FOREIGN KEY (`contactId`)
    REFERENCES `data_warehouse`.`contact` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8mb4;


SET SQL_MODE=@OLD_SQL_MODE;
SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS;
SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS;
