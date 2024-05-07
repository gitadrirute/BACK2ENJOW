-- MySQL dump 10.13  Distrib 8.0.36, for Win64 (x86_64)
--
-- Host: localhost    Database: back2enjoyv2
-- ------------------------------------------------------
-- Server version	8.0.36

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
-- Table structure for table `usuarios`
--

DROP TABLE IF EXISTS `usuarios`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `usuarios` (
  `id` bigint unsigned NOT NULL AUTO_INCREMENT,
  `nombre` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `apellidos` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `nombreUsuario` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `DNI` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `correo` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `contraseña` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `validado` tinyint(1) NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  `rol_usuario_id` bigint unsigned NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `usuarios_nombreusuario_unique` (`nombreUsuario`),
  UNIQUE KEY `usuarios_dni_unique` (`DNI`),
  UNIQUE KEY `usuarios_correo_unique` (`correo`),
  KEY `usuarios_rol_usuario_id_foreign` (`rol_usuario_id`),
  CONSTRAINT `usuarios_rol_usuario_id_foreign` FOREIGN KEY (`rol_usuario_id`) REFERENCES `roles_usuarios` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `usuarios`
--

LOCK TABLES `usuarios` WRITE;
/*!40000 ALTER TABLE `usuarios` DISABLE KEYS */;
INSERT INTO `usuarios` VALUES (1,'juan','diaz miguel','paquito56656','76303513x','useee3r@mielda2.com','$2y$12$kr0swmaklUy1TxWy0FPMcOaHV8jsx66u4GtHlJZeFXUJAiz6lRNzy',0,'2024-05-06 12:42:55','2024-05-06 12:42:55',2),(2,'paco','diarodriguezz','paquito5656','76300513x','useee3r@mielda1.com','$2y$12$.dsoC/zRorzlFKLJzK5QauKABQOG3z4rWSUSbfITfGt/MFynDWdvq',0,'2024-05-06 12:43:35','2024-05-06 12:43:35',2),(3,'andres','gallego','andres5656','76300513Y','useee3r@mielda5.com','$2y$12$MZ3dmRbppXM6CINyzy.Sv.yn1ytXrUM9oA2pJrvWOEuvDCQFmYzBe',0,'2024-05-07 12:18:46','2024-05-07 12:18:46',2),(4,'juanjo','jimenez','juanjo5656','76300913Y','useee3r@mielda6.com','$2y$12$R9PxgPtuJry0czmte54hD.PaXK92rJRHb7XaykaMJQd9RXN9SbEwu',0,'2024-05-07 12:35:58','2024-05-07 12:35:58',2);
/*!40000 ALTER TABLE `usuarios` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2024-05-07 17:42:10
