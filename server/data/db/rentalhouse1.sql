-- phpMyAdmin SQL Dump
-- version 5.0.2
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Dec 14, 2020 at 03:25 PM
-- Server version: 10.4.13-MariaDB-log
-- PHP Version: 7.4.7

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `rentalhouse`
--

-- --------------------------------------------------------

--
-- Table structure for table `address`
--

CREATE TABLE `address` (
  `addressID` int(11) NOT NULL,
  `city` varchar(250) NOT NULL,
  `country` varchar(100) NOT NULL DEFAULT 'Việt Nam',
  `district` varchar(250) NOT NULL,
  `phuong` varchar(250) NOT NULL,
  `street` varchar(250) NOT NULL,
  `nearby` varchar(1000) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `address`
--

INSERT INTO `address` (`addressID`, `city`, `country`, `district`, `phuong`, `street`, `nearby`) VALUES
(1, 'Hà Nội', 'Việt Nam', 'Nam Từ Liêm', 'Mễ Trì', 'Số 100, ngách 14/126', 'tòa nhà KeangNam\r\nBigC the Garden\r\nUBND phường Mễ Trì');

-- --------------------------------------------------------

--
-- Table structure for table `admin`
--

CREATE TABLE `admin` (
  `id` int(11) NOT NULL,
  `name` varchar(100) NOT NULL,
  `username` varchar(250) NOT NULL,
  `password` varchar(250) NOT NULL,
  `email` varchar(250) DEFAULT NULL,
  `avatar` text NOT NULL DEFAULT 'https://cdn.icon-icons.com/icons2/1378/PNG/512/avatardefault_92824.png',
  `createAt` datetime NOT NULL DEFAULT current_timestamp(),
  `updateAt` datetime NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `admin`
--

INSERT INTO `admin` (`id`, `name`, `username`, `password`, `email`, `avatar`, `createAt`, `updateAt`) VALUES
(10, 'Pham Quang Thinh', 'admin', '$2b$10$.IBj9APvtJgJIONOvqEQYuBJ1NAqBE1q4SuqKNMzvTzvvWqaeNLiG', 'phamquangquang2008@gmail.com', 'https://cdn.icon-icons.com/icons2/1378/PNG/512/avatardefault_92824.png', '2020-12-05 10:58:22', '2020-12-05 10:58:22');

-- --------------------------------------------------------

--
-- Table structure for table `favorites`
--

CREATE TABLE `favorites` (
  `id` int(11) NOT NULL,
  `id_post` int(11) NOT NULL,
  `id_member` int(11) NOT NULL,
  `status` tinyint(1) NOT NULL DEFAULT 1,
  `createAt` datetime NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `favorites`
--

INSERT INTO `favorites` (`id`, `id_post`, `id_member`, `status`, `createAt`) VALUES
(1, 1, 1, 1, '2020-12-14 17:14:34');

-- --------------------------------------------------------

--
-- Table structure for table `imagelist`
--

CREATE TABLE `imagelist` (
  `id` int(11) NOT NULL,
  `id_post` int(11) NOT NULL,
  `link` text NOT NULL DEFAULT 'http://localhost:4000/data/logo/logo.png',
  `createAt` datetime NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Table structure for table `member`
--

CREATE TABLE `member` (
  `id` int(11) NOT NULL,
  `name` varchar(250) NOT NULL,
  `email` varchar(250) DEFAULT NULL,
  `phone` varchar(10) DEFAULT NULL,
  `place` text DEFAULT NULL,
  `password` varchar(250) NOT NULL,
  `cmt` varchar(15) DEFAULT NULL,
  `avatar` text NOT NULL DEFAULT '\'https://cdn.icon-icons.com/icons2/1378/PNG/512/avatardefault_92824.png\'',
  `createAt` datetime NOT NULL DEFAULT current_timestamp(),
  `updateAt` datetime NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `member`
--

INSERT INTO `member` (`id`, `name`, `email`, `phone`, `place`, `password`, `cmt`, `avatar`, `createAt`, `updateAt`) VALUES
(1, 'pqthinh', 'pqthinh@gmail.com', '0987654321', NULL, 'pqthinh', NULL, 'https://cdn.icon-icons.com/icons2/1378/PNG/512/avatardefault_92824.png', '2020-12-03 07:46:44', '2020-12-03 07:46:44'),
(2, 'Pham Quang Thinh1', 'phamthinh208@yahoo.com', '0987654321', NULL, '.tlkoqgrim2b', NULL, 'https://cdn.icon-icons.com/icons2/1378/PNG/512/avatardefault_92824.png', '2020-12-06 11:47:44', '2020-12-06 11:47:44');

-- --------------------------------------------------------

--
-- Table structure for table `owner`
--

CREATE TABLE `owner` (
  `id_owner` int(11) NOT NULL,
  `name` varchar(250) NOT NULL,
  `email` varchar(250) NOT NULL,
  `phone` varchar(10) NOT NULL,
  `place` varchar(250) NOT NULL,
  `cmt` varchar(15) NOT NULL,
  `status` varchar(100) NOT NULL DEFAULT 'pendding',
  `password` varchar(250) NOT NULL,
  `createAt` datetime NOT NULL DEFAULT current_timestamp(),
  `updateAt` datetime NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `owner`
--

INSERT INTO `owner` (`id_owner`, `name`, `email`, `phone`, `place`, `cmt`, `status`, `password`, `createAt`, `updateAt`) VALUES
(1, 'Phạm Quang Thịnh', 'thinh@gmamil.com', '0987654321', 'Thái Thụy - Thái Bình', '022355568927', 'active', 'pqthinh', '2020-12-03 07:43:04', '2020-12-03 07:43:08');

-- --------------------------------------------------------

--
-- Table structure for table `post`
--

CREATE TABLE `post` (
  `postID` int(11) NOT NULL,
  `roomID` int(11) NOT NULL,
  `id_owner` int(11) NOT NULL,
  `address` varchar(250) NOT NULL,
  `duration` int(11) NOT NULL DEFAULT 7,
  `quantity` int(11) NOT NULL DEFAULT 1,
  `price` int(11) NOT NULL,
  `available` varchar(100) NOT NULL DEFAULT 'not rented',
  `views` int(11) NOT NULL DEFAULT 1,
  `status` varchar(100) NOT NULL DEFAULT 'pending',
  `discription` text DEFAULT NULL,
  `images` text NOT NULL DEFAULT 'http://localhost:4000/data/logo/logo.png',
  `createAt` datetime NOT NULL DEFAULT current_timestamp(),
  `updateAt` datetime NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `post`
--

INSERT INTO `post` (`postID`, `roomID`, `id_owner`, `address`, `duration`, `quantity`, `price`, `available`, `views`, `status`, `discription`, `images`, `createAt`, `updateAt`) VALUES
(1, 1, 1, '1', 7, 1, 2500000, 'not rented', 1, 'pending', '✨✨PHÒNG TRỌ GIÁ RẺ CHỈ TỪ - 3.500.000 - 3.700.000- 4.400.000 - 5.200.000 VNĐ/ Tháng ✨✨\r\n\r\n❎❎CAM KẾT VỀ❎❎\r\n✔️ Chất lượng hình ảnh, thông tin chính xác.\r\n✔️ Nhân viên luôn sẵn sàng hỗ trợ tư vấn nhiệt tình.\r\n✔️ Mọi thông tin đều được minh bạch rõ ràng trước khi cho khách ký cọc và làm hợp đồng thuê phòng với chủ nhà.\r\n✔️ Hệ thống mới tinh, dịch vụ chất lượng, nội thất hiện đại với mức giá tốt .\r\n\r\n💥Vị trí :\r\n- KDC Tân Quy gần Lotte Mart Q7\r\n- Nằm trên trục đường Huỳnh Tấn Phát dễ dàng đi chuyển sang Quận 4.\r\nGần Phú Mỹ Hưng, Crescent Mall, KCX Tân Thuận..\r\n\r\n❌❌GIỜ GIẤC TỰ DO 👏🏻👏🏻\r\n\r\n🏆 Nội thất phòng bao gồm:\r\n☑ Máy lạnh\r\n☑ Tủ lạnh\r\n☑ Máy giặt\r\n☑ Máy nóng lạnh\r\n☑ Tủ bếp\r\n☑ Lavabo + vòi nước\r\n☑ Kệ Bếp\r\n\r\n❌ĐẶC BIỆT❌: Có ưu đãi khủng cho khách hàng ở dài hạn!\r\n\r\n💃call/zalo:  Huỳnh Đức để được tư vấn phòng đẹp giá tốt ngay nhé mọi người <3', 'http://localhost:4000/data/logo/logo.png', '2020-12-03 08:42:47', '2020-12-03 08:42:47');

-- --------------------------------------------------------

--
-- Table structure for table `report`
--

CREATE TABLE `report` (
  `id` int(11) NOT NULL,
  `id_post` int(11) NOT NULL,
  `id_member` int(11) NOT NULL,
  `content` text DEFAULT NULL,
  `status` tinyint(1) NOT NULL,
  `createAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Table structure for table `review`
--

CREATE TABLE `review` (
  `id` int(11) NOT NULL,
  `id_post` int(11) NOT NULL,
  `id_member` int(11) NOT NULL,
  `comment` text NOT NULL,
  `star` int(2) NOT NULL DEFAULT 5,
  `status` tinyint(1) NOT NULL,
  `createAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Table structure for table `room`
--

CREATE TABLE `room` (
  `id` int(11) NOT NULL,
  `roomType` varchar(100) NOT NULL,
  `area` int(11) NOT NULL,
  `shared` int(11) NOT NULL,
  `bathroom` varchar(100) NOT NULL,
  `kitchen` varchar(100) NOT NULL,
  `airConditioner` tinyint(1) NOT NULL,
  `balcony` tinyint(1) NOT NULL,
  `typeCostElectric` tinyint(1) NOT NULL,
  `electricity` int(11) NOT NULL,
  `water` int(11) NOT NULL,
  `near_place` text DEFAULT NULL,
  `thoihan` int(11) NOT NULL DEFAULT 30,
  `updateAt` datetime NOT NULL DEFAULT current_timestamp(),
  `createAt` datetime NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `room`
--

INSERT INTO `room` (`id`, `roomType`, `area`, `shared`, `bathroom`, `kitchen`, `airConditioner`, `balcony`, `typeCostElectric`, `electricity`, `water`, `near_place`, `thoihan`, `updateAt`, `createAt`) VALUES
(1, ' Phòng trọ', 25, 1, '', '', 0, 0, 1, 0, 0, 'tòa nhà KeangNam,BigC the Garden,UBND phường Mễ Trì', 30, '2020-12-03 08:42:01', '2020-12-03 08:42:01'),
(2, 'Chung cư mini', 30, 0, 'khép kín không có nóng lạnh', 'Khu bếp riêng', 0, 0, 0, 4000, 25000, NULL, 30, '2020-12-14 16:03:02', '2020-12-14 16:03:02'),
(3, 'Phòng trọ', 20, 0, 'Khép kín có nóng lạnh', 'Khu bếp riêng', 1, 1, 0, 3500, 20000, NULL, 30, '2020-12-14 16:03:02', '2020-12-14 16:03:02'),
(4, 'nhà nguyên căn', 80, 0, 'khép kín, có nóng lạnh', 'khu bếp riêng', 1, 1, 0, 3500, 20000, NULL, 30, '2020-12-14 16:03:02', '2020-12-14 16:03:02');

-- --------------------------------------------------------

--
-- Table structure for table `thongbao`
--

CREATE TABLE `thongbao` (
  `id` int(11) NOT NULL,
  `id_nguoinhan` int(11) NOT NULL,
  `role` varchar(20) NOT NULL DEFAULT 'owner',
  `content` text NOT NULL,
  `createAt` datetime NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Table structure for table `thongbaoadmin`
--

CREATE TABLE `thongbaoadmin` (
  `id` int(11) NOT NULL,
  `id_post` int(11) NOT NULL,
  `content` text DEFAULT NULL,
  `createAt` datetime NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Indexes for dumped tables
--

--
-- Indexes for table `address`
--
ALTER TABLE `address`
  ADD PRIMARY KEY (`addressID`);

--
-- Indexes for table `admin`
--
ALTER TABLE `admin`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `favorites`
--
ALTER TABLE `favorites`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `imagelist`
--
ALTER TABLE `imagelist`
  ADD PRIMARY KEY (`id`),
  ADD KEY `id_post` (`id_post`);

--
-- Indexes for table `post`
--
ALTER TABLE `post`
  ADD PRIMARY KEY (`postID`),
  ADD UNIQUE KEY `roomID` (`roomID`),
  ADD UNIQUE KEY `userID` (`id_owner`);

--
-- Indexes for table `report`
--
ALTER TABLE `report`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `review`
--
ALTER TABLE `review`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `room`
--
ALTER TABLE `room`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `addressID` (`near_place`) USING HASH;

--
-- Indexes for table `thongbao`
--
ALTER TABLE `thongbao`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `thongbaoadmin`
--
ALTER TABLE `thongbaoadmin`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `address`
--
ALTER TABLE `address`
  MODIFY `addressID` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT for table `admin`
--
ALTER TABLE `admin`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=11;

--
-- AUTO_INCREMENT for table `favorites`
--
ALTER TABLE `favorites`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT for table `imagelist`
--
ALTER TABLE `imagelist`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `post`
--
ALTER TABLE `post`
  MODIFY `postID` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT for table `report`
--
ALTER TABLE `report`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `review`
--
ALTER TABLE `review`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `room`
--
ALTER TABLE `room`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- AUTO_INCREMENT for table `thongbao`
--
ALTER TABLE `thongbao`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `thongbaoadmin`
--
ALTER TABLE `thongbaoadmin`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
