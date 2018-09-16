# ************************************************************
# Sequel Pro SQL dump
# Version 4541
#
# http://www.sequelpro.com/
# https://github.com/sequelpro/sequelpro
#
# Host: 127.0.0.1 (MySQL 5.6.40)
# Database: codechef
# Generation Time: 2018-09-16 14:39:55 +0000
# ************************************************************


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;


# Dump of table profile
# ------------------------------------------------------------

DROP TABLE IF EXISTS `profile`;

CREATE TABLE `profile` (
  `id` int(11) unsigned NOT NULL AUTO_INCREMENT,
  `userId` int(11) unsigned NOT NULL,
  `questionsSolvedTotal` int(11) unsigned NOT NULL DEFAULT '0',
  `questionsAttemptedTotal` int(11) unsigned NOT NULL DEFAULT '0',
  `questionsSolvedCurrent` int(11) unsigned NOT NULL DEFAULT '0',
  `questionsAttemptedCurrent` int(11) unsigned NOT NULL DEFAULT '0',
  `createdAt` varchar(50) NOT NULL DEFAULT '0',
  `updatedAt` varchar(50) NOT NULL DEFAULT '0',
  PRIMARY KEY (`id`),
  UNIQUE KEY `userId_unique` (`userId`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;



# Dump of table session
# ------------------------------------------------------------

DROP TABLE IF EXISTS `session`;

CREATE TABLE `session` (
  `id` int(11) unsigned NOT NULL AUTO_INCREMENT,
  `initiatingUserId` int(11) unsigned NOT NULL,
  `invitedMembers` longtext,
  `activeMembers` longtext,
  `active` tinyint(1) unsigned DEFAULT '0',
  `url` varchar(255) NOT NULL DEFAULT '',
  `createdAt` varchar(50) NOT NULL DEFAULT '0',
  `updatedAt` varchar(50) NOT NULL DEFAULT '0',
  `contestSettings` longtext,
  PRIMARY KEY (`id`),
  UNIQUE KEY `initiatingUserId_unique` (`initiatingUserId`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;



# Dump of table user
# ------------------------------------------------------------

DROP TABLE IF EXISTS `user`;

CREATE TABLE `user` (
  `id` int(11) unsigned NOT NULL AUTO_INCREMENT,
  `accessToken` varchar(100) NOT NULL DEFAULT '',
  `refreshToken` varchar(100) NOT NULL DEFAULT '',
  `createdAt` varchar(50) NOT NULL DEFAULT '0',
  `updatedAt` varchar(50) NOT NULL DEFAULT '0',
  PRIMARY KEY (`id`),
  UNIQUE KEY `accessToken_unique` (`accessToken`),
  UNIQUE KEY `refreshToken_unique` (`refreshToken`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;




/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;
/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
