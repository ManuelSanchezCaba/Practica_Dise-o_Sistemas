-- MySQL Workbench Forward Engineering

SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0;
SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0;
SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION';

-- -----------------------------------------------------
-- Schema mydb
-- -----------------------------------------------------
-- -----------------------------------------------------
-- Schema ice_cream_ordering
-- -----------------------------------------------------

-- -----------------------------------------------------
-- Schema ice_cream_ordering
-- -----------------------------------------------------
CREATE SCHEMA IF NOT EXISTS `ice_cream_ordering` DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci ;
USE `ice_cream_ordering` ;

-- -----------------------------------------------------
-- Table `ice_cream_ordering`.`order_pack`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `ice_cream_ordering`.`order_pack` (
  `id_order_pack` INT(11) NOT NULL AUTO_INCREMENT,
  `creator` INT(11) NOT NULL,
  `orders` INT(11) NOT NULL,
  `name` VARCHAR(45) NOT NULL,
  `expiration_date` TEXT NOT NULL,
  PRIMARY KEY (`id_order_pack`),
  INDEX `fk_orders2_idx` (`orders` ASC) VISIBLE,
  INDEX `fk_user_idx` (`creator` ASC) VISIBLE,
  CONSTRAINT `fk_orders2`
    FOREIGN KEY (`orders`)
    REFERENCES `ice_cream_ordering`.`orden` (`id_order`),
  CONSTRAINT `fk_user`
    FOREIGN KEY (`creator`)
    REFERENCES `ice_cream_ordering`.`user` (`id_user`))
ENGINE = InnoDB
AUTO_INCREMENT = 1
DEFAULT CHARACTER SET = utf8mb4
COLLATE = utf8mb4_0900_ai_ci;


-- -----------------------------------------------------
-- Table `ice_cream_ordering`.`user`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `ice_cream_ordering`.`user` (
  `id_user` INT(11) NOT NULL AUTO_INCREMENT,
  `user_names` VARCHAR(40) NOT NULL,
  `email` VARCHAR(255) NOT NULL,
  `user_password` VARCHAR(40) NOT NULL,
  `orders` INT(11) NULL DEFAULT NULL,
  `orden` INT(11) NULL DEFAULT NULL,
  PRIMARY KEY (`id_user`),
  INDEX `fk_orders_idx` (`orders` ASC) VISIBLE,
  INDEX `fk_order_idx` (`orden` ASC) VISIBLE,
  CONSTRAINT `fk_order`
    FOREIGN KEY (`orden`)
    REFERENCES `ice_cream_ordering`.`orden` (`id_order`),
  CONSTRAINT `fk_orders`
    FOREIGN KEY (`orders`)
    REFERENCES `ice_cream_ordering`.`order_pack` (`id_order_pack`))
ENGINE = InnoDB
AUTO_INCREMENT = 1
DEFAULT CHARACTER SET = utf8mb4
COLLATE = utf8mb4_0900_ai_ci;


-- -----------------------------------------------------
-- Table `ice_cream_ordering`.`orden`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `ice_cream_ordering`.`orden` (
  `id_order` INT(11) NOT NULL AUTO_INCREMENT,
  `order_description` TEXT NOT NULL,
  `price` DECIMAL(10,2) NOT NULL,
  `id_user` INT(11) NOT NULL,
  `pay_method` VARCHAR(20) NOT NULL,
  `payed` TINYINT(1) NOT NULL,
  `created_at` TIMESTAMP NULL DEFAULT CURRENT_TIMESTAMP,
  `updated_at` TIMESTAMP NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`id_order`),
  INDEX `fk_user2_idx` (`id_user` ASC) VISIBLE,
  CONSTRAINT `fk_user2`
    FOREIGN KEY (`id_user`)
    REFERENCES `ice_cream_ordering`.`user` (`id_user`))
ENGINE = InnoDB
AUTO_INCREMENT = 1
DEFAULT CHARACTER SET = utf8mb4
COLLATE = utf8mb4_0900_ai_ci;


SET SQL_MODE=@OLD_SQL_MODE;
SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS;
SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS;