-- phpMyAdmin SQL Dump
-- version 5.0.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Tempo de geração: 06-Out-2020 às 21:28
-- Versão do servidor: 10.4.11-MariaDB
-- versão do PHP: 7.4.3

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Banco de dados: `orcamentos`
--

-- --------------------------------------------------------

--
-- Estrutura da tabela `orcamentos`
--

CREATE TABLE `orcamentos` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `nome_cliente` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `nome_vendedor` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `dt_orcamento` date NOT NULL,
  `hr_orcamento` time NOT NULL,
  `descricao_orcamento` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `valor_orcamento` double(8,2) NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Extraindo dados da tabela `orcamentos`
--

INSERT INTO `orcamentos` (`id`, `nome_cliente`, `nome_vendedor`, `dt_orcamento`, `hr_orcamento`, `descricao_orcamento`, `valor_orcamento`, `created_at`, `updated_at`) VALUES
(48, 'teste', 'teste', '2020-10-21', '17:47:00', 'teste', 100.00, '2020-10-02 22:47:34', '2020-10-02 22:47:34'),
(49, 'teste', 'teste', '2020-10-21', '17:47:00', 'teste', 100.00, '2020-10-02 22:47:34', '2020-10-02 22:47:34'),
(53, 'sfasfas', 'safasfas', '2020-10-21', '19:17:00', 'teste5', 1000.00, '2020-10-02 23:17:31', '2020-10-02 23:17:31'),
(59, 'thyago', 'thyago', '2020-10-22', '13:01:00', 'teste', 400.92, '2020-10-06 19:00:22', '2020-10-06 19:00:22'),
(61, 'carlos', 'carlos', '2020-10-27', '13:20:00', 'teste', 300.00, '2020-10-06 19:18:14', '2020-10-06 19:18:14'),
(63, 'thyago', 'thyago', '2020-10-20', '16:29:00', 'teste', 100.00, '2020-10-06 22:27:26', '2020-10-06 22:27:26');

--
-- Índices para tabelas despejadas
--

--
-- Índices para tabela `orcamentos`
--
ALTER TABLE `orcamentos`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT de tabelas despejadas
--

--
-- AUTO_INCREMENT de tabela `orcamentos`
--
ALTER TABLE `orcamentos`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=64;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
