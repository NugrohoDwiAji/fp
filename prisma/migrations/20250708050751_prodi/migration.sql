/*
  Warnings:

  - Added the required column `link` to the `Prodi` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `prodi` ADD COLUMN `link` VARCHAR(191) NOT NULL;
