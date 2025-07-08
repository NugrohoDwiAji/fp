/*
  Warnings:

  - Added the required column `jenis_dosen` to the `dosen` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `dosen` ADD COLUMN `jenis_dosen` VARCHAR(191) NOT NULL;
