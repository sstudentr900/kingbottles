-- phpMyAdmin SQL Dump
-- version 4.4.4
-- http://www.phpmyadmin.net
--
-- 主機: localhost
-- 產生時間： 2022 年 06 月 27 日 17:12
-- 伺服器版本: 5.5.56-MariaDB
-- PHP 版本： 5.6.40

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;

--
-- 資料庫： `MJAPP_kingbottles`
--

-- --------------------------------------------------------

--
-- 資料表結構 `baproduct`
--

CREATE TABLE IF NOT EXISTS `baproduct` (
  `id` int(11) NOT NULL,
  `Image` varchar(255) NOT NULL,
  `lg_title_tw` varchar(20) NOT NULL,
  `sm_title_tw` varchar(20) NOT NULL,
  `content_tw` text NOT NULL,
  `lg_title_en` varchar(30) NOT NULL,
  `sm_title_en` varchar(30) NOT NULL,
  `content_en` text NOT NULL,
  `is_Del` enum('Y','N') NOT NULL DEFAULT 'N'
) ENGINE=InnoDB AUTO_INCREMENT=45 DEFAULT CHARSET=utf8;

--
-- 資料表的匯出資料 `baproduct`
--

INSERT INTO `baproduct` (`id`, `Image`, `lg_title_tw`, `sm_title_tw`, `content_tw`, `lg_title_en`, `sm_title_en`, `content_en`, `is_Del`) VALUES
(39, 'baproduct1619515196.jpg', 'CNC加工', 'CNC PROCESS', '我們是五金加工的專家，任何產業皆需用得到的五金加工的製品，透過沖壓使金屬產生型變，做成各項機件的結構物件，沖壓零組件應用面相當廣泛，包括半導體、電腦、電子、通訊、家電、汽車、液晶電視、顯示器、手機、平板計算機、筆記型電腦等零件。', 'CNC', 'CNC PROCESS', 'We are experts in hardware processing. The hardware processing products that are needed in any industry can be deformed by stamping and made into structural objects of various mechanical parts. Stamping components have a wide range of applications, includ', 'N'),
(40, 'baproduct1619577539.jpg', '沖壓加工', 'STAMPING PROCESS', '弘婕將不斷在研發與製造技術中精進，必須先立足台灣、站穩大陸，才能放眼天下，在國際場合處處可看到我們自己的產品，我們將成為五金沖壓、CNC加工業者的最佳合作夥伴。若您正在尋找優質的合作廠商，請給我們互相認識的機會，弘婕擁有經驗豐富的團隊，提供您完善最專業服務及諮詢，並創造雙贏的局勢。', 'Stamping', 'STAMPING PROCESS', 'Hongjie will continue to make progress in R&D and manufacturing technology. We must first base ourselves in Taiwan and stand firmly in the mainland before we can look at the world. We can see our own products everywhere in international occasions. We will become the best cooperation for metal stamping and CNC processing industries. partner. If you are looking for high-quality cooperative manufacturers, please give us a chance to get to know each other. Hongjie has an experienced team to provide you with the most professional services and consultations, and create a win-win situation.', 'N'),
(42, 'baproduct1619588293.jpg', 'CNC加工', 'CNC PROCESS', '我們是五金加工的專家，任何產業皆需用得到的五金加工的製品，透過沖壓使金屬產生型變，做成各項機件的結構物件，沖壓零組件應用面相當廣泛，包括半導體、電腦、電子、通訊、家電、汽車、液晶電視、顯示器、手機、平板計算機、筆記型電腦等零件。', 'CNC', 'CNC PROCESS', 'We are experts in hardware processing. The hardware processing products that are needed in any industry can be deformed by stamping and made into structural objects of various mechanical parts. Stamping components have a wide range of applications, includ', 'N'),
(43, 'baproduct1619588337.jpg', 'CNC加工', 'CNC PROCESS', '我們是五金加工的專家，任何產業皆需用得到的五金加工的製品，透過沖壓使金屬產生型變，做成各項機件的結構物件，沖壓零組件應用面相當廣泛，包括半導體、電腦、電子、通訊、家電、汽車、液晶電視、顯示器、手機、平板計算機、筆記型電腦等零件。', 'CNC', 'CNC PROCESS', 'We are experts in hardware processing. The hardware processing products that are needed in any industry can be deformed by stamping and made into structural objects of various mechanical parts. Stamping components have a wide range of applications, includ', 'N'),
(44, 'baproduct1619588503.jpg', '沖壓加工', 'CNC PROCESS', '我們是五金加工的專家，任何產業皆需用得到的五金加工的製品，透過沖壓使金屬產生型變，做成各項機件的結構物件，沖壓零組件應用面相當廣泛，包括半導體、電腦、電子、通訊、家電、汽車、液晶電視、顯示器、手機、平板計算機、筆記型電腦等零件。', 'CNC', 'CNC PROCESS', 'We are experts in hardware processing. The hardware processing products that are needed in any industry can be deformed by stamping and made into structural objects of various mechanical parts. Stamping components have a wide range of applications, includ', 'N');

-- --------------------------------------------------------

--
-- 資料表結構 `manager`
--

CREATE TABLE IF NOT EXISTS `manager` (
  `id` int(11) NOT NULL,
  `Create_Time` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `Image` varchar(255) NOT NULL,
  `Account` varchar(50) NOT NULL COMMENT '帳號',
  `Name` varchar(20) NOT NULL,
  `Phone` varchar(20) NOT NULL,
  `Password` varchar(50) NOT NULL,
  `is_Release` enum('Y','N') NOT NULL DEFAULT 'N',
  `is_Del` enum('Y','N') NOT NULL DEFAULT 'N'
) ENGINE=InnoDB AUTO_INCREMENT=29 DEFAULT CHARSET=utf8;

--
-- 資料表的匯出資料 `manager`
--

INSERT INTO `manager` (`id`, `Create_Time`, `Image`, `Account`, `Name`, `Phone`, `Password`, `is_Release`, `is_Del`) VALUES
(18, '2018-07-11 07:30:01', 'bamanager1572327145.jpg', '1@1.1', '111', '111', '8e96c1a9df2a971c0772281c4f61d3df', 'Y', 'N'),
(28, '2020-06-10 06:58:56', 'bamanager1591772336.jpg', 'phenix@mj-app.com.tw', 'phenix', '0988233544', '9d3817a028d89960cb381098e615c14a', 'Y', 'N');

--
-- 已匯出資料表的索引
--

--
-- 資料表索引 `baproduct`
--
ALTER TABLE `baproduct`
  ADD PRIMARY KEY (`id`),
  ADD KEY `id` (`id`);

--
-- 資料表索引 `manager`
--
ALTER TABLE `manager`
  ADD PRIMARY KEY (`id`);

--
-- 在匯出的資料表使用 AUTO_INCREMENT
--

--
-- 使用資料表 AUTO_INCREMENT `baproduct`
--
ALTER TABLE `baproduct`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT,AUTO_INCREMENT=45;
--
-- 使用資料表 AUTO_INCREMENT `manager`
--
ALTER TABLE `manager`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT,AUTO_INCREMENT=29;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
