-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Waktu pembuatan: 10 Sep 2023 pada 16.42
-- Versi server: 10.4.27-MariaDB
-- Versi PHP: 8.2.0

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `crud_react`
--

-- --------------------------------------------------------

--
-- Struktur dari tabel `p_product`
--

CREATE TABLE `p_product` (
  `id` int(11) NOT NULL,
  `name` varchar(255) DEFAULT NULL,
  `product` varchar(255) DEFAULT NULL,
  `category` varchar(255) DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data untuk tabel `p_product`
--

INSERT INTO `p_product` (`id`, `name`, `product`, `category`, `createdAt`, `updatedAt`) VALUES
(1, 'Samsung 10', 'Samsung', 'Handphone', '2023-09-09 09:46:10', '2023-09-09 14:59:41'),
(2, 'Mac M1', 'Apple', 'Laptop', '2023-09-09 09:49:29', '2023-09-09 09:49:29'),
(3, 'Vivo V20', 'Vivo', 'Handphone', '2023-09-09 10:04:05', '2023-09-09 10:04:05'),
(4, 'Iphone 9', 'Apple', 'Handphone', '2023-09-09 10:04:36', '2023-09-09 10:18:49'),
(6, 'Nokia A10', 'Nokia', 'Laptop', '2023-09-09 14:42:37', '2023-09-09 14:58:46'),
(12, 'Oppo Ideapad', 'Oppo', 'Handphone', '2023-09-09 15:17:42', '2023-09-09 15:17:48');

--
-- Indexes for dumped tables
--

--
-- Indeks untuk tabel `p_product`
--
ALTER TABLE `p_product`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT untuk tabel yang dibuang
--

--
-- AUTO_INCREMENT untuk tabel `p_product`
--
ALTER TABLE `p_product`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=14;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
