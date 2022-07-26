-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Jul 26, 2022 at 06:35 PM
-- Server version: 10.4.24-MariaDB
-- PHP Version: 8.1.6

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `dc_tracker`
--

-- --------------------------------------------------------

--
-- Table structure for table `documents`
--

CREATE TABLE `documents` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `name` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `nomor_surat` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `nik` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `status` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `documents`
--

INSERT INTO `documents` (`id`, `name`, `nomor_surat`, `nik`, `status`, `created_at`, `updated_at`) VALUES
(1, 'Surat Keterangan 1', '123456789', '7308060809870001', 'Tidak Aktif', '2022-07-25 22:32:08', '2022-07-25 22:32:08'),
(2, 'Surat Keterangan 2', '223456789', '7308060809870002', 'Tidak Aktif', '2022-07-25 22:32:08', '2022-07-25 22:32:08'),
(3, 'Surat Keterangan 3', '323456789', '7308060809870003', 'Tidak Aktif', '2022-07-25 22:32:08', '2022-07-25 22:32:08'),
(4, 'Surat Keterangan 4', '423456789', '7308060809870004', 'Tidak Aktif', '2022-07-25 22:32:08', '2022-07-25 22:32:08'),
(5, 'Surat Keterangan 5', '523456789', '7308060809870005', 'Tidak Aktif', '2022-07-25 22:32:08', '2022-07-25 22:32:08'),
(6, 'Surat Keterangan 6', '623456789', '7308060809870006', 'Tidak Aktif', '2022-07-25 22:32:08', '2022-07-25 22:32:08'),
(7, 'Surat Keterangan 7', '723456789', '7308060809870007', 'Tidak Aktif', '2022-07-25 22:32:08', '2022-07-25 22:32:08'),
(8, 'Surat Keterangan 8', '823456789', '7308060809870008', 'Tidak Aktif', '2022-07-25 22:32:08', '2022-07-25 22:32:08'),
(9, 'Surat Keterangan 9', '923456789', '7308060809870009', 'Tidak Aktif', '2022-07-25 22:32:08', '2022-07-25 22:32:08'),
(10, 'Surat Keterangan 10', '1023456789', '73080608098700010', 'Tidak Aktif', '2022-07-25 22:32:08', '2022-07-25 22:32:08');

-- --------------------------------------------------------

--
-- Table structure for table `failed_jobs`
--

CREATE TABLE `failed_jobs` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `uuid` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `connection` text COLLATE utf8mb4_unicode_ci NOT NULL,
  `queue` text COLLATE utf8mb4_unicode_ci NOT NULL,
  `payload` longtext COLLATE utf8mb4_unicode_ci NOT NULL,
  `exception` longtext COLLATE utf8mb4_unicode_ci NOT NULL,
  `failed_at` timestamp NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `migrations`
--

CREATE TABLE `migrations` (
  `id` int(10) UNSIGNED NOT NULL,
  `migration` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `batch` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `migrations`
--

INSERT INTO `migrations` (`id`, `migration`, `batch`) VALUES
(1, '2014_10_12_000000_create_users_table', 1),
(2, '2014_10_12_100000_create_password_resets_table', 1),
(3, '2019_08_19_000000_create_failed_jobs_table', 1),
(4, '2019_12_14_000001_create_personal_access_tokens_table', 1),
(5, '2022_07_15_165456_create_documents_table', 1),
(6, '2022_07_25_192828_create_prisoners_table', 1);

-- --------------------------------------------------------

--
-- Table structure for table `password_resets`
--

CREATE TABLE `password_resets` (
  `email` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `token` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `personal_access_tokens`
--

CREATE TABLE `personal_access_tokens` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `tokenable_type` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `tokenable_id` bigint(20) UNSIGNED NOT NULL,
  `name` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `token` varchar(64) COLLATE utf8mb4_unicode_ci NOT NULL,
  `abilities` text COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `last_used_at` timestamp NULL DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `prisoners`
--

CREATE TABLE `prisoners` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `name` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `resi` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `status` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `prisoners`
--

INSERT INTO `prisoners` (`id`, `name`, `resi`, `status`, `created_at`, `updated_at`) VALUES
(1, 'Surat Keterangan 1', 'NP001MRS', 'Dalam Perjalanan', '2022-07-25 22:32:12', '2022-07-25 22:32:12'),
(2, 'Surat Keterangan 2', 'NP002MRS', 'Dalam Perjalanan', '2022-07-25 22:32:12', '2022-07-25 22:32:12'),
(3, 'Surat Keterangan 3', 'NP003MRS', 'Dalam Perjalanan', '2022-07-25 22:32:12', '2022-07-25 22:32:12'),
(4, 'Surat Keterangan 4', 'NP004MRS', 'Dalam Perjalanan', '2022-07-25 22:32:12', '2022-07-25 22:32:12'),
(5, 'Surat Keterangan 5', 'NP005MRS', 'Dalam Perjalanan', '2022-07-25 22:32:12', '2022-07-25 22:32:12'),
(6, 'Surat Keterangan 6', 'NP006MRS', 'Dalam Perjalanan', '2022-07-25 22:32:12', '2022-07-25 22:32:12'),
(7, 'Surat Keterangan 7', 'NP007MRS', 'Dalam Perjalanan', '2022-07-25 22:32:12', '2022-07-25 22:32:12'),
(8, 'Surat Keterangan 8', 'NP008MRS', 'Dalam Perjalanan', '2022-07-25 22:32:12', '2022-07-25 22:32:12'),
(9, 'Surat Keterangan 9', 'NP009MRS', 'Dalam Perjalanan', '2022-07-25 22:32:12', '2022-07-25 22:32:12'),
(10, 'Surat Keterangan 10', 'NP0010MRS', 'Dalam Perjalanan', '2022-07-25 22:32:12', '2022-07-25 22:32:12');

-- --------------------------------------------------------

--
-- Table structure for table `users`
--

CREATE TABLE `users` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `name` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `email` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `email_verified_at` timestamp NULL DEFAULT NULL,
  `password` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `remember_token` varchar(100) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `users`
--

INSERT INTO `users` (`id`, `name`, `email`, `email_verified_at`, `password`, `remember_token`, `created_at`, `updated_at`) VALUES
(1, 'Wade Kreiger', 'diana79@example.com', '2022-07-25 22:27:34', 'password', '5EEWc8XFEm', '2022-07-25 22:27:34', '2022-07-25 22:27:34'),
(2, 'Prof. Warren Kunze', 'lisette20@example.net', '2022-07-25 22:27:34', 'password', 'RgFYDqftfU', '2022-07-25 22:27:34', '2022-07-25 22:27:34'),
(3, 'Dr. Terry Farrell', 'myrtie.simonis@example.org', '2022-07-25 22:27:34', 'password', 'MrDZaKGnvW', '2022-07-25 22:27:34', '2022-07-25 22:27:34'),
(4, 'Rosella Brakus', 'metz.samson@example.org', '2022-07-25 22:27:34', 'password', 'gIkyeEvija', '2022-07-25 22:27:34', '2022-07-25 22:27:34'),
(5, 'Betty Gerhold', 'armstrong.lura@example.org', '2022-07-25 22:27:34', 'password', 'YBwbky6tGp', '2022-07-25 22:27:35', '2022-07-25 22:27:35'),
(6, 'Amina Grady', 'scronin@example.net', '2022-07-25 22:27:34', 'password', '2wMk5NvFbo', '2022-07-25 22:27:35', '2022-07-25 22:27:35'),
(7, 'Connie Will III', 'stacy.oreilly@example.com', '2022-07-25 22:27:34', 'password', 'cmJiM8vXCi', '2022-07-25 22:27:35', '2022-07-25 22:27:35'),
(8, 'Gregorio Schoen', 'manuel68@example.net', '2022-07-25 22:27:34', 'password', 'sFGUjFJ4s6', '2022-07-25 22:27:35', '2022-07-25 22:27:35'),
(9, 'Chaya West MD', 'stracke.justina@example.net', '2022-07-25 22:27:34', 'password', 'ZiOiOgatwO', '2022-07-25 22:27:35', '2022-07-25 22:27:35'),
(10, 'Esmeralda Tromp', 'spencer.murphy@example.com', '2022-07-25 22:27:34', 'password', 'Zko4Mz71Qd', '2022-07-25 22:27:35', '2022-07-25 22:27:35'),
(11, 'ren', 'ren@example.com', NULL, '$2y$10$suKdF9sdeQ/axOyuCQDBgu2AIM4jaETw9MUPzp9jBcVGxNtPcJ86m', NULL, '2022-07-25 22:27:59', '2022-07-25 22:27:59');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `documents`
--
ALTER TABLE `documents`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `failed_jobs`
--
ALTER TABLE `failed_jobs`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `failed_jobs_uuid_unique` (`uuid`);

--
-- Indexes for table `migrations`
--
ALTER TABLE `migrations`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `password_resets`
--
ALTER TABLE `password_resets`
  ADD KEY `password_resets_email_index` (`email`);

--
-- Indexes for table `personal_access_tokens`
--
ALTER TABLE `personal_access_tokens`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `personal_access_tokens_token_unique` (`token`),
  ADD KEY `personal_access_tokens_tokenable_type_tokenable_id_index` (`tokenable_type`,`tokenable_id`);

--
-- Indexes for table `prisoners`
--
ALTER TABLE `prisoners`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `users_email_unique` (`email`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `documents`
--
ALTER TABLE `documents`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=11;

--
-- AUTO_INCREMENT for table `failed_jobs`
--
ALTER TABLE `failed_jobs`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `migrations`
--
ALTER TABLE `migrations`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;

--
-- AUTO_INCREMENT for table `personal_access_tokens`
--
ALTER TABLE `personal_access_tokens`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `prisoners`
--
ALTER TABLE `prisoners`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=11;

--
-- AUTO_INCREMENT for table `users`
--
ALTER TABLE `users`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=12;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
