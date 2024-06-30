-- MariaDB dump 10.19  Distrib 10.6.16-MariaDB, for debian-linux-gnu (x86_64)
--
-- Host: localhost    Database: travelin
-- ------------------------------------------------------
-- Server version       10.6.16-MariaDB-0ubuntu0.22.04.1
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `Culture`
--

/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `Culture` (
  `id` int(11) NOT NULL,
  `name` varchar(100) NOT NULL,
  `description` text NOT NULL,
  `province` varchar(50) NOT NULL,
  `address` varchar(50) NOT NULL,
  `image` text DEFAULT NULL,
  PRIMARY KEY (`id`)
);
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `Culture`
--

INSERT INTO `Culture` VALUES (1,'Barong Dance','Barong Dance is a traditional Balinese dance depicting the battle between good (Barong) and evil (Rangda).','Bali','Batubulan Village, Gianyar, Bali','image/1717453792826-barong-dance.jpg');
INSERT INTO `Culture` VALUES (2,'Saman Dance','Saman Dance is a traditional Acehnese dance performed in groups with synchronized hand and body movements.','Aceh','Gayo Lues, Aceh','image/1717453916404-saman-dance.jpg');
INSERT INTO `Culture` VALUES (3,'Karapan Sapi','Karapan Sapi is a traditional bull racing competition from Madura, East Java.','East Java','Madura Island, East Java','image/1717454107796-karapan-sapi.jpg');
INSERT INTO `Culture` VALUES (4,'Reog Ponorogo','Reog Ponorogo is a traditional performance art from Ponorogo, East Java, featuring large masks and lion dance.','East Java','Ponorogo, East Java','image/1717454159409-reog-ponorogo.jpg');
INSERT INTO `Culture` VALUES (5,'Nadran Ceremony','Nadran Ceremony is a sea ritual performed by fishermen in West Java as a form of gratitude for the sea\'s bounty.','West Java','Indramayu, West Java','image/1717454190017-nadran-ceremony.jpg');
INSERT INTO `Culture` VALUES (6,'Ondel-ondel','Ondel-ondel is a traditional Betawi performance featuring giant puppets and is an icon of Jakarta\'s culture.','Jakarta','Betawi Village, Jakarta','image/1717454216425-ondel-ondel.jpg');
INSERT INTO `Culture` VALUES (7,'Ruwatan','Ruwatan is a traditional Javanese ceremony aimed at cleansing oneself from bad luck and evil spirits.','Central Java','Surakarta, Central Java','image/1717454232406-ruwatan.jpg');
INSERT INTO `Culture` VALUES (8,'Pakarena Dance','Pakarena Dance is a traditional dance from South Sulawesi depicting the grace and politeness of Bugis women.','South Sulawesi','Gowa, South Sulawesi','image/1717454253041-pakarena-dance.jpg');
INSERT INTO `Culture` VALUES (9,'Ararem','Ararem is a tradition of delivering dowries in the culture of West Papua with traditional dances and music.','West Papua','Sorong, West Papua','image/1717454268560-ararem.jpg');
INSERT INTO `Culture` VALUES (10,'Bonet Dance','Bonet Dance is a traditional dance from East Nusa Tenggara that reflects the spirit of togetherness and cooperation.','East Nusa Tenggara','Kupang, East Nusa Tenggara','image/1717454288791-bonet-dance.jpg');

--
-- Table structure for table `Tour`
--

/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `Tour` (
  `id` int(11) NOT NULL,
  `name` varchar(100) NOT NULL,
  `description` text NOT NULL,
  `province` varchar(50) NOT NULL,
  `address` varchar(50) NOT NULL,
  `image` text DEFAULT NULL,
  `map` text DEFAULT NULL,
  PRIMARY KEY (`id`)
);
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `Tour`
--

INSERT INTO `Tour` VALUES (1,'Labuan Bajo','Labuan Bajo is a fishing town located at the western end of the large island of Flores in the Nusa Tenggara region of east Indonesia.','East Nusa Tenggara','Labuan Bajo, Flores, East Nusa Tenggara','image/1717454383242-labuan-bajo.jpeg','https://maps.app.goo.gl/Ymxoivu43n8EUYiP9');
INSERT INTO `Tour` VALUES (2,'Kota Tua','Kota Tua Jakarta is a neighborhood comprising the original downtown area of Jakarta, Indonesia. This is a great place to explore the history and culture of Jakarta.','Jakarta','Kota Tua, West Jakarta, Jakarta','image/1717454423849-kota-tua.jpeg','https://maps.app.goo.gl/fxtAStSg84tbxMmN8');
INSERT INTO `Tour` VALUES (3,'Candi Borobudur','Borobudur is a 9th-century Mahayana Buddhist temple in Magelang, Central Java, Indonesia. It is the world\'s largest Buddhist temple.','Central Java','Borobudur, Magelang, Central Java','image/1717454439217-candi-borobudur.jpeg','https://maps.app.goo.gl/8ycvg6CzqzCe2EHDA');
INSERT INTO `Tour` VALUES (4,'Pantai Kuta','Kuta Beach is one of Bali\'s most famous and popular tourist destinations. It is known for its long sandy beach and great surf.','Bali','Kuta, Badung, Bali','image/1717454452018-pantai-kuta.jpeg','https://maps.app.goo.gl/psS1Y8B5kvmUiaWD6');
INSERT INTO `Tour` VALUES (5,'Gunung Bromo','Mount Bromo is an active volcano and part of the Tengger massif, in East Java, Indonesia. The area is one of the most visited tourist attractions in East Java.','East Java','Bromo Tengger Semeru National Park, East Java','image/1717454465988-gunung-bromo.jpeg','https://maps.app.goo.gl/f4xm2CMFBrWawNE3A');
INSERT INTO `Tour` VALUES (6,'Gunung Tangkuban Perahu','Tangkuban Perahu is an active volcano located 30 km north of the city of Bandung, the provincial capital of West Java, Indonesia.','West Java','Lembang, West Bandung Regency, West Java','image/1717454489654-gunung-tangkuban-perahu.jpeg','https://maps.app.goo.gl/YuEVjaqPqJF5zGka8');
INSERT INTO `Tour` VALUES (7,'Dieng','Dieng Plateau is a marshy plateau that forms the floor of a caldera complex on the Dieng Volcanic Complex near Wonosobo, Central Java, Indonesia.','Central Java','Dieng, Wonosobo, Central Java','image/1717454513577-Dieng.jpeg','https://maps.app.goo.gl/LpGGE7RCxJeMd7s1A');
INSERT INTO `Tour` VALUES (8,'Pulau Komodo','Komodo Island is one of the 17,508 islands that make up the Republic of Indonesia. The island is particularly notable as the habitat of the Komodo dragon.','East Nusa Tenggara','Komodo National Park, East Nusa Tenggara','image/1717454531003-pulau-komodo.jpeg','https://maps.app.goo.gl/FHX9pZUnben9txPa6');
INSERT INTO `Tour` VALUES (9,'Pulau Raja Ampat','Raja Ampat Islands are an Indonesian archipelago off the northwest tip of Bird\'s Head Peninsula in West Papua.','West Papua','Raja Ampat, West Papua','image/1717454552648-pulau-raja-ampat.jpeg','https://maps.app.goo.gl/Q6ZwjioyyCJ7ZzCC6');
INSERT INTO `Tour` VALUES (10,'Candi Prambanan','Prambanan is a 9th-century Hindu temple compound in Central Java, dedicated to the Trimurti, the expression of God as the Creator (Brahma), the Preserver (Vishnu), and the Destroyer (Shiva).','Central Java','Prambanan, Sleman, Central Java','image/1717454569857-candi-prambanan.jpeg','https://maps.app.goo.gl/4rBo6ZBBUY5aw8Js5');

--
-- Table structure for table `_prisma_migrations`
--

/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `_prisma_migrations` (
  `id` varchar(36) NOT NULL,
  `checksum` varchar(64) NOT NULL,
  `finished_at` datetime(3) DEFAULT NULL,
  `migration_name` varchar(255) NOT NULL,
  `logs` text DEFAULT NULL,
  `rolled_back_at` datetime(3) DEFAULT NULL,
  `started_at` datetime(3) NOT NULL DEFAULT current_timestamp(3),
  `applied_steps_count` int(10) unsigned NOT NULL DEFAULT 0,
  PRIMARY KEY (`id`)
);
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `_prisma_migrations`
--

INSERT INTO `_prisma_migrations` VALUES ('232f6ea1-14d9-46f8-8e8c-25ccce9a196d','0136c9c5ca3d57e508c2bafe15a726ac93b32b0df707a2fb6ab7905f11f0bd42','2024-06-03 15:02:08.592','20240603150208_init',NULL,NULL,'2024-06-03 15:02:08.559',1);
INSERT INTO `_prisma_migrations` VALUES ('a45cd04c-70ce-4a6e-96a0-484353015f2c','e74f2a27711eeb5f85032da3e9d4ebb8867b44b89a162bab2abedf947d84ebc2','2024-06-09 14:16:29.046','20240609141629_init',NULL,NULL,'2024-06-09 14:16:29.032',1);
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2024-06-18  3:38:14
