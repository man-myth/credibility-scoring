-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Aug 12, 2023 at 06:45 AM
-- Server version: 10.4.28-MariaDB
-- PHP Version: 8.2.4

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `csv_db 6`
--

-- --------------------------------------------------------

--
-- Table structure for table `clients`
--

CREATE TABLE `clients` (
  `client_id` int(11) NOT NULL,
  `name` varchar(255) NOT NULL,
  `address` varchar(255) NOT NULL,
  `picture` varchar(255) DEFAULT NULL,
  `gender` varchar(255) DEFAULT NULL CHECK (`gender` in ('Male','Female')),
  `birthday` date NOT NULL,
  `credit_score` int(11) DEFAULT NULL CHECK (`credit_score` between 300 and 850),
  `marital_status` varchar(255) DEFAULT NULL CHECK (`marital_status` in ('Single','Married','Divorced','Widowed','Separated')),
  `dependents` int(11) DEFAULT NULL CHECK (`dependents` >= 0),
  `contact` varchar(255) DEFAULT NULL,
  `education` varchar(255) DEFAULT NULL CHECK (`education` in ('High School','College','Gradeschool')),
  `housing` varchar(255) DEFAULT NULL CHECK (`housing` in ('Rent','Own','Free')),
  `years_residence` int(11) DEFAULT NULL CHECK (`years_residence` >= 0),
  `employment` varchar(255) DEFAULT NULL CHECK (`employment` in ('Employed part-time','Employed full-time','Unemployed','Self-employed')),
  `industry` varchar(255) DEFAULT NULL,
  `income` int(11) DEFAULT NULL CHECK (`income` >= 0),
  `expenses` int(11) DEFAULT NULL CHECK (`expenses` >= 0),
  `savings` int(11) DEFAULT NULL CHECK (`savings` >= 0),
  `loan_history` varchar(255) DEFAULT NULL CHECK (`loan_history` in ('All credits paid back duly','Existing Credits','No loan history / Never applied for a loan','Applied for a loan but declined')),
  `properties` text DEFAULT NULL,
  `createdAt` datetime DEFAULT current_timestamp(),
  `updatedAt` timestamp NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_general_ci;

--
-- Dumping data for table `clients`
--

INSERT INTO `clients` (`client_id`, `name`, `address`, `picture`, `gender`, `birthday`, `credit_score`, `marital_status`, `dependents`, `contact`, `education`, `housing`, `years_residence`, `employment`, `industry`, `income`, `expenses`, `savings`, `loan_history`, `properties`, `createdAt`, `updatedAt`) VALUES
(1000000, 'Rosalia Briones', 'Baguio City', '/100000/pic', 'Female', '1996-02-03', 700, 'Single', 0, '09123456786', 'High school', 'Own', 20, 'Self-employed', 'Retail and Wholesale Trade', 50000, 30000, 20000, 'Existing Credits', 'Insurance Policy', '2023-08-09 15:28:04', '2023-08-12 04:44:48'),
(1000001, 'Sheryl Aggalao', 'Baguio City', '/100001/pic', 'Female', '1997-03-16', 450, 'Single', 0, '09193445671', 'College', 'Own', 23, 'Self-employed', 'Retail and Wholesale Trade', 7000, 3000, 25000, 'Existing Credits', NULL, '2023-08-09 15:31:56', '2023-08-09 07:31:56'),
(1000002, 'Dina Ayan', 'Pangasinan', '/100002/pic', 'Female', '1990-03-29', 450, 'Single', 0, '09193445671', 'College', 'Own', 25, 'Self-employed', 'Retail and Wholesale Trade', 8000, 4000, 30000, 'Existing Credits', NULL, '2023-08-09 15:33:39', '2023-08-09 07:33:39'),
(1000003, 'Rhea Busongan', 'Baguio City', '/100003/pic', 'Female', '1995-04-19', 450, 'Single', 0, '09191224532', 'College', 'Own', 23, 'Self-employed', 'Retail and Wholesale Trade', 5000, 2500, 10000, 'Existing Credits', NULL, '2023-08-09 15:35:12', '2023-08-09 07:35:12'),
(1000004, 'Elsie Policdas Cueno', 'Baguio City', '/100004/pic', 'Female', '1998-04-01', 474, 'Married', 0, '09123445671', 'High school', 'Own', 25, 'Unemployed', 'Unemployed', 6000, 2000, 20000, 'Existing Credits', 'Insurance Policy', '2023-08-09 15:37:45', '2023-08-09 07:37:45'),
(1000005, 'Normelita Sungduan', 'Baguio City', '/100005/pic', 'Male', '1975-01-04', 524, 'Married', 0, '09112345121', 'High school', 'Rent', 5, 'Self-employed', 'Retail and Wholesale Trade', 9500, 3500, 10000, 'Existing Credits', 'Insurance Policy', '2023-08-09 15:40:58', '2023-08-09 10:01:24'),
(1000006, 'Carolyn Kimpa-Oy Tandoyog', 'Baguio City', '/100006/pic', 'Female', '1961-01-01', 527, 'Widowed', 0, '09113322191', 'High school', 'Own', 30, 'Self-employed', 'Retail and Wholesale Trade', 9200, 3500, 9500, 'Existing Credits', NULL, '2023-08-09 15:43:54', '2023-08-09 07:43:54'),
(1000007, 'Jennifer Taruc Gutierrez', 'La Union', '/100007/pic', 'Female', '1995-08-16', 528, 'Married', 2, '09119933192', 'High school', 'Rent', 13, 'Self-employed', 'Retail and Wholesale Trade', 9400, 4300, 9800, 'Existing Credits', 'Insurance Policy', '2023-08-09 15:46:47', '2023-08-09 07:46:47'),
(1000008, 'Ryan Pistula', 'Baguio City', '/100008/pic', 'Male', '1993-07-13', 537, 'Married', 0, '09221933192', 'High school', 'Own', 18, 'Self-employed', 'Agriculture and Farming', 9900, 4000, 9900, 'Existing Credits', NULL, '2023-08-09 15:49:03', '2023-08-09 07:49:03'),
(1000009, 'Catchube Saingan Binay-an Jr.', 'Baguio City', '/100009/pic', 'Male', '1997-01-20', 544, 'Married', 0, '09132003197', 'High school', 'Own', 21, 'Self-employed', 'Agriculture and Farming', 9950, 2000, 0, 'Existing Credits', NULL, '2023-08-09 16:32:23', '2023-08-09 08:32:23'),
(1000010, 'Imelda Espada', 'Baguio City', '/100010/pic', 'Female', '1963-02-05', 549, 'Married', 4, '09992003197', 'Gradeschool', 'Own', 30, 'Unemployed', 'Unemployed', 9800, 1500, 8000, 'Existing Credits', 'Insurance Policy', '2023-08-09 16:35:13', '2023-08-09 10:03:14'),
(1000011, 'Edga Lamsis Paus', 'Baguio City', '/1000111/pic', 'Male', '1976-03-30', 631, 'Married', 0, '09229200319', 'High school', 'Rent', 25, 'Self-employed', 'Transportaion and Logistics', 9850, 3500, 9550, 'Existing Credits', 'Insurance Policy', '2023-08-09 16:38:06', '2023-08-09 08:38:06'),
(1000012, 'Jomar Alegado', 'Baguio City', '/100012/pic', 'Male', '1993-08-27', 638, 'Single', 0, '09233920032', 'College', 'Free', 24, 'Self-employed', 'Informationa nd Technology and Software Development', 9999, 3500, 9950, 'Existing Credits', NULL, '2023-08-09 16:41:46', '2023-08-09 08:41:46'),
(1000013, 'Meljoy Dong-as', 'Pangasinan', '/100013/pic', 'Female', '1988-06-20', 638, 'Single', 0, '09233922211', 'College', 'Rent', 14, 'Self-employed', 'Professional Services (Legal, Accounting, Consulting, etc.)', 25000, 7500, 9800, 'Existing Credits', NULL, '2023-08-09 16:44:04', '2023-08-09 08:44:04'),
(1000014, 'Roxan Dela Cruz Dauz', 'Tarlac', '/100014/pic', 'Female', '1983-07-13', 649, 'Widowed', 0, '09233833677', 'College', 'Rent', 12, 'Self-employed', 'Government and Public Administration', 27500, 6500, 0, 'Existing Credits', NULL, '2023-08-09 16:46:24', '2023-08-09 08:46:24'),
(1000015, 'Sheila Guanso Adais', 'Baguio City', '/100015/pic', 'Female', '1984-06-20', 662, 'Married', 0, '09118336771', 'College', 'Own', 26, 'Self-employed', 'Food and Beverage', 29500, 7000, 9500, 'All credits paid back duly', NULL, '2023-08-09 16:48:37', '2023-08-09 08:48:37'),
(1000016, 'Mayumi Paasi Calias', 'Baguio City', '/100016/pic', 'Female', '1973-07-19', 673, 'Married', 1, '09234567890', 'College', 'Own', 29, 'Self-employed', 'Health Care and Pharmaceuticals', 30500, 7200, 13000, 'Existing Credits', 'Insurance Policy', '2023-08-09 16:52:22', '2023-08-09 08:52:22'),
(1000017, 'Jan Waylon Calpi Kanggat', 'Baguio City', '/100017/pic', 'Male', '1998-02-01', 694, 'Single', 0, '09345678901', 'College', 'Own', 35, 'Employed full-time', 'Educaion and Academia', 22500, 5000, 9580, 'Existing Credits', 'Insurance Policy', '2023-08-09 16:55:20', '2023-08-09 08:55:20'),
(1000018, 'Alexander Malia', 'Baguio City', '/100018/pic', 'Male', '1965-04-03', 714, 'Single', 2, '09012345678', 'College', 'Own', 40, 'Self-employed', 'Construction and Engineering', 60000, 15000, 9999, 'No loan history / Never applied for a loan', 'Insurance Policy', '2023-08-09 16:58:22', '2023-08-09 10:04:30'),
(1000019, 'Oscar Joaquin', 'Baguio City', '/100019/pic', 'Male', '1957-07-20', 754, 'Married', 0, '09901234567', 'College', 'Own', 18, 'Self-employed', 'Religious Organizations', 9998, 3000, 8000, 'All credits paid back duly', NULL, '2023-08-09 17:01:17', '2023-08-09 09:01:17');

-- --------------------------------------------------------

--
-- Table structure for table `loans`
--

CREATE TABLE `loans` (
  `loan_id` int(11) NOT NULL,
  `client_id` int(11) DEFAULT NULL,
  `purpose` text NOT NULL,
  `loan_status` varchar(255) DEFAULT NULL CHECK (`loan_status` in ('Approved','Disapproved','Pending')),
  `loan_amount` int(11) DEFAULT NULL CHECK (`loan_amount` > 0),
  `guarantors` int(11) DEFAULT NULL CHECK (`guarantors` >= 0),
  `coapplicant` int(11) DEFAULT NULL CHECK (`coapplicant` >= 0),
  `duration` int(11) DEFAULT NULL CHECK (`duration` > 0),
  `validated_by` varchar(255) NOT NULL,
  `loan_type` varchar(255) DEFAULT NULL CHECK (`loan_type` in ('Personal','Business','End-To-End')),
  `approvedAt` datetime DEFAULT NULL,
  `createdAt` datetime DEFAULT current_timestamp(),
  `updatedAt` timestamp NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_general_ci;

--
-- Dumping data for table `loans`
--

INSERT INTO `loans` (`loan_id`, `client_id`, `purpose`, `loan_status`, `loan_amount`, `guarantors`, `coapplicant`, `duration`, `validated_by`, `loan_type`, `approvedAt`, `createdAt`, `updatedAt`) VALUES
(2000001, 1000000, 'Educational Loan', 'Approved', 10000, 1, 0, 12, '', 'Personal', NULL, '2023-08-09 17:03:51', '2023-08-12 04:39:50'),
(2000002, 1000000, 'Car Loan', 'Disapproved', 100000, 1, 1, 12, '', 'Personal', NULL, '2023-08-09 17:05:31', '2023-08-12 04:37:35'),
(2000003, 1000001, 'Personal Loan', 'Pending', 5000, 1, 0, 4, '', 'Personal', NULL, '2023-08-09 17:06:35', '2023-08-12 04:36:24'),
(2000004, 1000001, 'Personal Loan', 'Pending', 4000, 1, 0, 4, '', 'Personal', NULL, '2023-08-09 17:07:55', '2023-08-12 04:36:29'),
(2000005, 1000002, 'Personal Loan', 'Approved', 4500, 0, 0, 4, '', 'Personal', NULL, '2023-08-09 17:08:39', '2023-08-12 04:34:59'),
(2000006, 1000002, 'Business Loan', 'Disapproved', 10000, 1, 0, 4, '', 'Business', NULL, '2023-08-09 17:09:04', '2023-08-12 04:35:02'),
(2000007, 1000003, 'Personal Loan', 'Approved', 3000, 1, 0, 3, '', 'Personal', NULL, '2023-08-09 17:10:03', '2023-08-12 04:35:05'),
(2000008, 1000003, 'Business Loan', 'Pending', 4000, 1, 1, 3, '', 'Business', NULL, '2023-08-09 17:10:29', '2023-08-12 04:42:48'),
(2000009, 1000004, 'Personal Loan', 'Approved', 3500, 1, 0, 3, '', 'Personal', NULL, '2023-08-09 17:11:00', '2023-08-12 04:35:09'),
(2000010, 1000004, 'Business Loan', 'Disapproved', 15000, 0, 1, 6, '', 'Business', NULL, '2023-08-09 17:11:45', '2023-08-12 04:35:11'),
(2000011, 1000005, 'Personal Loan', 'Pending', 6000, 0, 0, 6, '', 'Personal', NULL, '2023-08-09 17:12:40', '2023-08-12 04:36:19'),
(2000012, 1000005, 'Business Loan', 'Disapproved', 20000, 1, 1, 3, '', 'Business', NULL, '2023-08-09 17:13:16', '2023-08-12 04:35:14'),
(2000013, 1000006, 'Personal Loan', 'Approved', 5000, 1, 0, 3, '', 'Personal', NULL, '2023-08-09 17:14:00', '2023-08-12 04:35:16'),
(2000014, 1000006, 'Educational Loan', 'Approved', 5500, 1, 1, 3, '', 'Personal', NULL, '2023-08-09 17:14:17', '2023-08-12 04:39:59'),
(2000015, 1000007, 'Personal Loan', 'Approved', 3000, 1, 1, 3, '', 'Personal', NULL, '2023-08-09 17:17:57', '2023-08-12 04:35:18'),
(2000016, 1000007, 'Personal Loan', 'Approved', 3500, 1, 0, 3, '', 'Personal', NULL, '2023-08-09 17:18:08', '2023-08-12 04:35:20'),
(2000017, 1000008, 'Business Loan', 'Pending', 4500, 0, 0, 3, '', 'Business', NULL, '2023-08-09 17:18:52', '2023-08-12 04:36:41'),
(2000018, 1000008, 'Business Loan', 'Disapproved', 15000, 0, 1, 3, '', 'Business', NULL, '2023-08-09 17:19:11', '2023-08-12 04:35:24'),
(2000019, 1000009, 'Business Loan', 'Approved', 5000, 0, 1, 6, '', 'Business', NULL, '2023-08-09 17:19:45', '2023-08-12 04:35:25'),
(2000020, 1000009, 'Business Loan', 'Approved', 5500, 1, 1, 6, '', 'Business', NULL, '2023-08-09 17:19:58', '2023-08-12 04:35:27'),
(2000021, 1000010, 'Business Loan', 'Disapproved', 6000, 2, 1, 6, '', 'Business', NULL, '2023-08-09 17:20:32', '2023-08-12 04:35:30'),
(2000022, 1000010, 'Business Loan', 'Disapproved', 10000, 1, 1, 6, '', 'Business', NULL, '2023-08-09 17:20:41', '2023-08-12 04:35:31'),
(2000023, 1000011, 'Personal Loan', 'Approved', 5000, 1, 1, 6, '', 'Personal', NULL, '2023-08-09 17:21:28', '2023-08-12 04:35:33'),
(2000024, 1000011, 'Personal Loan', 'Approved', 4500, 2, 1, 6, '', 'Personal', NULL, '2023-08-09 17:21:36', '2023-08-12 04:35:34'),
(2000025, 1000012, 'Personal Loan', 'Approved', 6000, 0, 1, 3, '', 'Personal', NULL, '2023-08-09 17:22:12', '2023-08-12 04:35:35'),
(2000026, 1000012, 'Personal Loan', 'Approved', 5000, 0, 1, 4, '', 'Personal', NULL, '2023-08-09 17:22:22', '2023-08-12 04:35:38'),
(2000027, 1000013, 'Personal Loan', 'Approved', 15000, 1, 0, 6, '', 'Personal', NULL, '2023-08-09 17:22:44', '2023-08-12 04:35:42'),
(2000028, 1000013, 'Personal Loan', 'Approved', 10000, 1, 0, 6, '', 'Personal', NULL, '2023-08-09 17:22:52', '2023-08-12 04:35:43'),
(2000029, 1000014, 'Personal Loan', 'Approved', 15000, 1, 1, 6, '', 'Personal', NULL, '2023-08-09 17:23:27', '2023-08-12 04:35:45'),
(2000030, 1000014, 'Personal Loan', 'Disapproved', 50000, 1, 1, 3, '', 'Personal', NULL, '2023-08-09 17:23:52', '2023-08-12 04:35:47'),
(2000031, 1000015, 'Business Loan', 'Approved', 10000, 1, 1, 3, '', 'Business', NULL, '2023-08-09 17:24:35', '2023-08-12 04:35:48'),
(2000032, 1000015, 'Business Loan', 'Approved', 15000, 1, 1, 3, '', 'Business', NULL, '2023-08-09 17:24:44', '2023-08-12 04:35:49'),
(2000033, 1000016, 'Home Loan', 'Approved', 10000, 1, 1, 3, '', 'Personal', NULL, '2023-08-09 17:25:21', '2023-08-12 04:40:26'),
(2000034, 1000016, 'Home Loan', 'Approved', 16000, 1, 1, 4, '', 'Personal', NULL, '2023-08-09 17:26:24', '2023-08-12 04:39:28'),
(2000035, 1000017, 'Personal Loan', 'Disapproved', 40000, 2, 1, 4, '', 'Personal', NULL, '2023-08-09 17:27:10', '2023-08-12 04:35:53'),
(2000036, 1000017, 'Personal Loan', 'Disapproved', 10000, 1, 1, 4, '', 'Personal', NULL, '2023-08-09 17:27:18', '2023-08-12 04:35:55'),
(2000037, 1000018, 'Business Loan', 'Approved', 20000, 1, 1, 6, '', 'Business', NULL, '2023-08-09 17:27:50', '2023-08-12 04:35:56'),
(2000038, 1000018, 'Business Loan', 'Approved', 15000, 1, 1, 3, '', 'Business', NULL, '2023-08-09 17:27:59', '2023-08-12 04:36:03'),
(2000039, 1000019, 'Personal Loan', 'Approved', 4000, 1, 1, 6, '', 'Personal', NULL, '2023-08-09 17:28:26', '2023-08-12 04:36:04'),
(2000040, 1000019, 'Personal Loan', 'Approved', 4500, 0, 1, 3, '', 'Personal', NULL, '2023-08-09 17:28:40', '2023-08-12 04:36:06');

-- --------------------------------------------------------

--
-- Table structure for table `scorecards`
--

CREATE TABLE `scorecards` (
  `feature_name` varchar(255) DEFAULT NULL,
  `score` int(11) DEFAULT NULL,
  `createdAt` date NOT NULL DEFAULT current_timestamp(),
  `updatedAt` date NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_general_ci;

--
-- Dumping data for table `scorecards`
--

INSERT INTO `scorecards` (`feature_name`, `score`, `createdAt`, `updatedAt`) VALUES
('Intercept', 607, '2023-08-10', '2023-08-10'),
('Age_18-25', -7, '2023-08-10', '2023-08-10'),
('Age_26-45', -32, '2023-08-10', '2023-08-10'),
('Age_46-55', -13, '2023-08-10', '2023-08-10'),
('Age_56-60', 6, '2023-08-10', '2023-08-10'),
('Age_61-65', 8, '2023-08-10', '2023-08-10'),
('Age_66-75', 36, '2023-08-10', '2023-08-10'),
('Age_76-85', 4, '2023-08-10', '2023-08-10'),
('Age_>85', 0, '2023-08-10', '2023-08-10'),
('Sex_Female', -11, '2023-08-10', '2023-08-10'),
('Sex_Male', 11, '2023-08-10', '2023-08-10'),
('Number of Dependents_1', 0, '2023-08-10', '2023-08-10'),
('Number of Dependents_2', -11, '2023-08-10', '2023-08-10'),
('Number of Dependents_3', 11, '2023-08-10', '2023-08-10'),
('Number of Dependents_4', 1, '2023-08-10', '2023-08-10'),
('Number of Dependents_5', 12, '2023-08-10', '2023-08-10'),
('Number of Dependents_none', -13, '2023-08-10', '2023-08-10'),
('Number of Dependentes_6 or more', 0, '2023-08-10', '2023-08-10'),
('Highest Educational Attainment_College', 7, '2023-08-10', '2023-08-10'),
('Highest Educational Attainment_Gradeschool', 8, '2023-08-10', '2023-08-10'),
('Highest Educational Attainment_High school', -15, '2023-08-10', '2023-08-10'),
('Highest Educational Attainment_None of the above', 0, '2023-08-10', '2023-08-10'),
('Current Housing Situation_Living in someone\'s home for Free', 26, '2023-08-10', '2023-08-10'),
('Current Housing Situation_Own', -1, '2023-08-10', '2023-08-10'),
('Current Housing Situation_Rent', -25, '2023-08-10', '2023-08-10'),
('Years in Residence_11 - 15 years', 6, '2023-08-10', '2023-08-10'),
('Years in Residence_16 - 20 years', 22, '2023-08-10', '2023-08-10'),
('Years in Residence_4 - 6 years', -1, '2023-08-10', '2023-08-10'),
('Years in Residence_7 - 10 years', -6, '2023-08-10', '2023-08-10'),
('Years in Residence_More than 20 years', -21, '2023-08-10', '2023-08-10'),
('Years in Residence_Less than 1 year', 0, '2023-08-10', '2023-08-10'),
('Years in Residence_1 - 3 years', 0, '2023-08-10', '2023-08-10'),
('Employment Status_Employed full-time', 5, '2023-08-10', '2023-08-10'),
('Employment Status_Self-employed', 26, '2023-08-10', '2023-08-10'),
('Employment Status_Unemployed', -32, '2023-08-10', '2023-08-10'),
('Employment Status_Employed part-time', 0, '2023-08-10', '2023-08-10'),
('Job Industry_Agriculture and Farming', -30, '2023-08-10', '2023-08-10'),
('Job Industry_Banking and Finance', -13, '2023-08-10', '2023-08-10'),
('Job Industry_Construction and Engineering', 5, '2023-08-10', '2023-08-10'),
('Job Industry_Education and Academia', -3, '2023-08-10', '2023-08-10'),
('Job Industry_Energy and Utilities', 19, '2023-08-10', '2023-08-10'),
('Job Industry_Food and Beverage', 27, '2023-08-10', '2023-08-10'),
('Job Industry_Government and Public Administration', 20, '2023-08-10', '2023-08-10'),
('Job Industry_Health Care and Pharmaceuticals', 29, '2023-08-10', '2023-08-10'),
('Job Industry_Information Technology and Software Development', 6, '2023-08-10', '2023-08-10'),
('Job Industry_Manufacturing and Industrial', -21, '2023-08-10', '2023-08-10'),
('Job Industry_Networking', -32, '2023-08-10', '2023-08-10'),
('Job Industry_Public Works', 5, '2023-08-10', '2023-08-10'),
('Job Industry_Religious Organizations', 38, '2023-08-10', '2023-08-10'),
('Job Industry_Retail and Wholesale Trade', -74, '2023-08-10', '2023-08-10'),
('Job Industry_Tourism and Hospitality', 12, '2023-08-10', '2023-08-10'),
('Job Industry_Transportation and Logistics', 17, '2023-08-10', '2023-08-10'),
('Job Industry_Unemployed', -6, '2023-08-10', '2023-08-10'),
('Job Industry_Media and Entertainment', 0, '2023-08-10', '2023-08-10'),
('Job Industry_Telecommunications', 0, '2023-08-10', '2023-08-10'),
('Job Industry_Professional Services (Legal, Accounting, Consulting, etc.)', 0, '2023-08-10', '2023-08-10'),
('Monthly Income_10,000 - 50,000 Pesos', 25, '2023-08-10', '2023-08-10'),
('Monthly Income_50,001 - 100,000 Pesos', 1, '2023-08-10', '2023-08-10'),
('Monthly Income_Less than 10,000 Pesos', -27, '2023-08-10', '2023-08-10'),
('Monthly Income_100,001 - 500,000 Pesos', 0, '2023-08-10', '2023-08-10'),
('Monthly Income_1,000,000 - 5,000,000 Pesos', 0, '2023-08-10', '2023-08-10'),
('Monthly Income_More than 5,000,000', 0, '2023-08-10', '2023-08-10'),
('Monthly Income_500,001 -1,000,000 Pesos', 0, '2023-08-10', '2023-08-10'),
('Current Savings_10,000 - 50,000 Pesos', -39, '2023-08-10', '2023-08-10'),
('Current Savings_I do not have any savings', 11, '2023-08-10', '2023-08-10'),
('Current Savings_Less than 10,000 Pesos', 20, '2023-08-10', '2023-08-10'),
('Current Savings_More than 5,000,000', 8, '2023-08-10', '2023-08-10'),
('Current Savings_50,001 - 100,000 Pesos', 0, '2023-08-10', '2023-08-10'),
('Current Savings_100,001 - 500,000 Pesos', 0, '2023-08-10', '2023-08-10'),
('Current Savings_500,001 - 1,000,000 Pesos', 0, '2023-08-10', '2023-08-10'),
('Current Savings_1,000,001 - 5,000,000 Pesos', 0, '2023-08-10', '2023-08-10'),
('Insurance Policy_no', -18, '2023-08-10', '2023-08-10'),
('Insurance Policy_yes', 18, '2023-08-10', '2023-08-10');

-- --------------------------------------------------------

--
-- Table structure for table `users`
--

CREATE TABLE `users` (
  `email` varchar(255) DEFAULT NULL,
  `username` varchar(255) DEFAULT NULL,
  `password` varchar(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_general_ci;

-- --------------------------------------------------------

--
-- Table structure for table `user_details`
--

CREATE TABLE `user_details` (
  `email` varchar(255) NOT NULL,
  `name` varchar(255) DEFAULT NULL,
  `picture` varchar(255) DEFAULT NULL,
  `phone` varchar(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_general_ci;

--
-- Indexes for dumped tables
--

--
-- Indexes for table `clients`
--
ALTER TABLE `clients`
  ADD PRIMARY KEY (`client_id`);
ALTER TABLE `loans`
  ADD PRIMARY KEY (`loan_id`);
--
-- Indexes for table `users`
--
ALTER TABLE `users`
  ADD KEY `email` (`email`);

--
-- Indexes for table `user_details`
--
ALTER TABLE `user_details`
  ADD PRIMARY KEY (`email`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `clients`
--
ALTER TABLE `clients`
  MODIFY `client_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=1000000;
ALTER TABLE `loans`
  MODIFY `loan_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=200000;
--
-- Constraints for dumped tables
--

--
-- Constraints for table `users`
--
ALTER TABLE `users`
  ADD CONSTRAINT `users_ibfk_1` FOREIGN KEY (`email`) REFERENCES `user_details` (`email`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
