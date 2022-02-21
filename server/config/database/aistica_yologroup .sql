-- phpMyAdmin SQL Dump
-- version 5.0.1
-- https://www.phpmyadmin.net/
--
-- Host: localhost
-- Generation Time: Feb 21, 2022 at 04:10 PM
-- Server version: 10.4.11-MariaDB
-- PHP Version: 7.2.27

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `aistica_yologroup`
--

-- --------------------------------------------------------

--
-- Table structure for table `games`
--

CREATE TABLE `games` (
  `url_thumb` varchar(250) NOT NULL,
  `url_background` varchar(250) NOT NULL,
  `product` varchar(50) NOT NULL,
  `platforms` varchar(100) NOT NULL,
  `name` varchar(100) NOT NULL,
  `game_code` varchar(100) NOT NULL,
  `freebet_support` tinyint(1) NOT NULL,
  `phoenix_jackpot_support` tinyint(1) NOT NULL,
  `enabled` tinyint(1) NOT NULL,
  `category` varchar(50) NOT NULL,
  `blocked_countries` varchar(100) NOT NULL,
  `release_date` date NOT NULL,
  `volatility` int(1) NOT NULL,
  `rtp` float NOT NULL,
  `paylines` int(1) NOT NULL,
  `hit_ratio` float NOT NULL,
  `certifications` varchar(100) NOT NULL,
  `languages` varchar(100) NOT NULL,
  `theme` varchar(100) NOT NULL,
  `technology` varchar(50) NOT NULL,
  `features` varchar(100) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `games`
--

INSERT INTO `games` (`url_thumb`, `url_background`, `product`, `platforms`, `name`, `game_code`, `freebet_support`, `phoenix_jackpot_support`, `enabled`, `category`, `blocked_countries`, `release_date`, `volatility`, `rtp`, `paylines`, `hit_ratio`, `certifications`, `languages`, `theme`, `technology`, `features`) VALUES
('BlackJack_regular.jpg', 'BlackJack_regular', 'OneTouch', 'GPL_DESKTOP, GPL_MOBILE', 'Blackjack_Classic', 'ont_blackjack_classic', 1, 0, 0, 'Blackjack', 'AU,US,UK', '2017-11-05', 1, 98.8, 0, 45.5, 'CURACAO, MGA', 'eng,jpn,kar,deu', 'Vegas,Blue,Wood', 'HTML5', 'Achievements,FreeSpins'),
('png_aceofspades.jpg', 'png_aceofspades', 'OneTouch', 'GPL_DESKTOP, GPL_MOBILE', 'Ace of Spades', 'AceofSpades', 1, 0, 1, 'AceofSpades', 'US,UK,SP', '2008-10-08', 1, 50, 0, 45.93, 'MGA', 'eng,spa,deu', 'Vegas,Wood', 'HTML5', 'Achievements'),
('wacky-wildlife-thumb.jpg', 'wacky-wildlife-thumb', 'OneTouch', 'GPL_DESKTOP, GPL_MOBILE', 'Wacky', 'Wacky', 1, 0, 1, 'Wacky', 'US,UK,SP', '2008-10-08', 1, 50, 0, 45.93, 'MGA', 'eng,spa,deu', 'Vegas,Wood', 'HTML5', 'Achievements'),
('Fortune Miner.jpeg', 'Fortune Miner', 'OneTouch', 'GPL_DESKTOP, GPL_MOBILE', 'Fortune Miner', 'FortuneMiner', 1, 0, 1, 'FortuneMiner', 'AU,US,UK', '2014-02-03', 1, 52, 0, 45.8, 'MGA', 'eng,spn,deu', 'Vegas,Blue', 'HTML5', 'Achievements'),
('ont_wildsorcery.jpg', 'ont_wildsorcery', 'OneTouch', 'GPL_DESKTOP, GPL_MOBILE', 'Wild Sorcery', 'WildSorcery', 1, 0, 1, 'WildSorcery', 'AU,US,UK', '2012-12-04', 1, 52, 0, 45.8, 'MGA', 'eng,spn,deu', 'Vegas,Blue', 'HTML5', 'Achievements'),
('loot-or-boot-thumbnail.jpg', 'loot-or-boot-thumbnail', 'OneTouch', 'GPL_DESKTOP, GPL_MOBILE', 'Loot or Boot', 'LootOrBoot', 1, 0, 1, 'LootOrBoot', 'AU,US,UK', '2012-12-04', 1, 51, 0, 42, 'MGA', 'eng,spn,deu', 'Vegas,Blue', 'HTML5', 'Achievements'),
('ygg_goldenfishtank.jpg', 'ygg_goldenfishtank', 'OneTouch', 'GPL_DESKTOP, GPL_MOBILE', 'Golden Fishtank', 'GoldenFishtank', 1, 0, 1, 'GoldenFishtank', 'AU,US,UK', '2019-02-01', 1, 51, 0, 42, 'MGA', 'eng,spn,deu', 'Vegas,Blue', 'HTML5', 'Achievements'),
('png_energoonz.jpg', 'png_energoonz', 'OneTouch', 'GPL_DESKTOP, GPL_MOBILE', 'Energoonz', 'Energoonz', 1, 0, 1, 'Energoonz', 'AU,US,UK', '2019-02-01', 1, 51, 0, 42, 'MGA', 'eng,spn,deu', 'Vegas,Blue', 'HTML5', 'Achievements'),
('Cherry-Bomb-Deluxe-icon.jpg', 'Cherry-Bomb-Deluxe-icon', 'OneTouch', 'GPL_DESKTOP, GPL_MOBILE', 'Cherry Bomb Deluxe', 'CherryBombDeluxe', 1, 0, 1, 'CherryBombDeluxe', 'AU,US,UK', '2020-01-01', 1, 50, 0, 45, 'MGA', 'eng,spn,deu', 'Vegas,Blue', 'HTML5', 'Achievements');

-- --------------------------------------------------------

--
-- Table structure for table `logs`
--

CREATE TABLE `logs` (
  `id` int(4) NOT NULL,
  `operator_id` int(4) NOT NULL,
  `user_id` int(4) NOT NULL,
  `user_name` varchar(50) NOT NULL,
  `user_ip` varchar(16) NOT NULL,
  `date` varchar(25) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Table structure for table `operator`
--

CREATE TABLE `operator` (
  `operator_id` int(4) NOT NULL,
  `name` varchar(100) NOT NULL,
  `games` varchar(200) CHARACTER SET utf8mb4 COLLATE utf8mb4_bin NOT NULL,
  `status` tinyint(1) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `operator`
--

INSERT INTO `operator` (`operator_id`, `name`, `games`, `status`) VALUES
(1, 'Ricardo Beaujon', 'ont_blackjack_classic,AceofSpades,Wacky,FortuneMiner,WildSorcery,LootOrBoot,GoldenFishtank,Energoonz,CherryBombDeluxe', 1);

-- --------------------------------------------------------

--
-- Table structure for table `url_games`
--

CREATE TABLE `url_games` (
  `id` int(4) NOT NULL,
  `game_code` varchar(100) NOT NULL,
  `url` varchar(250) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `url_games`
--

INSERT INTO `url_games` (`id`, `game_code`, `url`) VALUES
(1, 'ont_blackjack_classic', 'https://hub88.io/game/2112'),
(2, 'AceofSpades', 'https://hub88.io/game/1476'),
(3, 'Wacky', 'https://hub88.io/game/4364'),
(4, 'FortuneMiner', 'https://hub88.io/game/4263'),
(5, 'WildSorcery', 'https://hub88.io/game/5559'),
(6, 'LootOrBoot', 'https://hub88.io/game/11154'),
(7, 'GoldenFishtank', 'https://hub88.io/game/1646'),
(8, 'Energoonz', 'https://hub88.io/game/1505'),
(9, 'CherryBombDeluxe', 'https://hub88.io/game/1600');

-- --------------------------------------------------------

--
-- Table structure for table `users`
--

CREATE TABLE `users` (
  `id` int(4) NOT NULL,
  `name` varchar(50) NOT NULL,
  `password` varchar(50) NOT NULL,
  `email` varchar(100) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `users`
--

INSERT INTO `users` (`id`, `name`, `password`, `email`) VALUES
(1, 'Ricardo Beaujon', '1234', 'rbeaujon77@gmail.com'),
(2, 'Administrator', '1234', 'admin@yologroup.com'),
(3, 'Regular User', '1234', 'user@yologroup.com');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `logs`
--
ALTER TABLE `logs`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `operator`
--
ALTER TABLE `operator`
  ADD PRIMARY KEY (`operator_id`);

--
-- Indexes for table `url_games`
--
ALTER TABLE `url_games`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `logs`
--
ALTER TABLE `logs`
  MODIFY `id` int(4) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT for table `operator`
--
ALTER TABLE `operator`
  MODIFY `operator_id` int(4) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT for table `url_games`
--
ALTER TABLE `url_games`
  MODIFY `id` int(4) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=10;

--
-- AUTO_INCREMENT for table `users`
--
ALTER TABLE `users`
  MODIFY `id` int(4) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
