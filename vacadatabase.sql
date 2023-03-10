CREATE DATABASE  IF NOT EXISTS `vacadatabase` /*!40100 DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci */ /*!80016 DEFAULT ENCRYPTION='N' */;
USE `vacadatabase`;
-- MySQL dump 10.13  Distrib 8.0.31, for Win64 (x86_64)
--
-- Host: localhost    Database: vacadatabase
-- ------------------------------------------------------
-- Server version	8.0.31

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `users`
--

DROP TABLE IF EXISTS `users`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `users` (
  `id` int NOT NULL AUTO_INCREMENT,
  `first_name` varchar(255) NOT NULL,
  `last_name` varchar(255) NOT NULL,
  `user_name` varchar(255) NOT NULL,
  `email` varchar(255) NOT NULL,
  `password` varchar(255) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `users`
--

LOCK TABLES `users` WRITE;
/*!40000 ALTER TABLE `users` DISABLE KEYS */;
INSERT INTO `users` VALUES (1,'tomer','vaknin','admin','tomer123@gmail.com','aquamarine'),(2,'Tomer','Vaknin','username','TomerVaknin2.0@gmail.com','$2a$10$eTMspcLoMirYJSngqMBxQeUdYbZUk1YkatNA6KRWtDcMP8fPDapSm');
/*!40000 ALTER TABLE `users` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `vacations`
--

DROP TABLE IF EXISTS `vacations`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `vacations` (
  `id` int NOT NULL AUTO_INCREMENT,
  `description` varchar(255) NOT NULL,
  `destination` varchar(255) NOT NULL,
  `image_id` varchar(255) NOT NULL,
  `start_date` date NOT NULL,
  `finish_date` date NOT NULL,
  `price` decimal(10,2) NOT NULL,
  `followers` int NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=16 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `vacations`
--

LOCK TABLES `vacations` WRITE;
/*!40000 ALTER TABLE `vacations` DISABLE KEYS */;
INSERT INTO `vacations` VALUES (1,'A tropical vacation to Hawaii','Hawaii','hawaii-1','2023-02-01','2023-01-09',999.99,0),(2,'future and tradition at the land of the rising sun','Tokyo','tokyo-1','2023-03-11','2023-03-25',2499.00,0),(3,'The city of fantastic lights and all night parties','Las Vegas','las_vegas-1','2023-02-06','2023-02-14',649.99,0),(4,'A vacation full of beautiful beaches and awesome ancient history','Athens','athens-1','2023-04-02','2023-04-07',399.00,10),(5,'A dream vacation of famous artistic wonders and historic hidden gems','Rome','rome-1','2023-02-13','2023-02-21',1194.99,0),(6,'the Catalan capital, Otherworldly architecture, colorful markets, and tasty tapas','Barcelona','barcelona-1','2023-03-09','2023-03-11',499.00,0),(7,'Budapest`s blend of culture, art, and architecture will leave you charmed','Budapest','budapest-1','2023-05-03','2023-05-06',449.99,0),(8,'From desert dunes to opulent mosques and deluxe urban scenery','Abu Dhabi','abu-dhabi-1','2023-02-16','2023-02-28',2999.99,1),(9,'A city synonymous with beauty','Paris','paris-1','2023-06-22','2023-06-25',549.99,0),(10,'historical landmarks and skyscrapers galore','New York City','new-york-1','2023-01-26','2023-02-12',2449.99,0),(11,'Enjoy views of the city`s iconic monuments','Prague','prague-1','2023-04-12','2023-04-15',399.99,0),(12,'Bustling markets, serene temples and urban action','Bangkok','bangkok-1','2023-04-16','2023-04-28',1899.99,0),(13,'A city famous for its world class art, tolerance, and happy cyclists','Amsterdam','amsterdam-1','2023-01-10','2023-01-14',699.00,0),(14,'1600-year-old port city with remnants of medieval might','Venice','venice-1','2023-03-17','2023-03-24',799.99,0),(15,'South Korea?s capital blends traditional palaces with high-rises amid a cutting-edge fashion and design scene','Seoul','seoul-1','2023-07-07','2023-07-26',3499.99,0);
/*!40000 ALTER TABLE `vacations` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2023-03-08 21:02:18
