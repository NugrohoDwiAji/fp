/*
  Warnings:

  - You are about to drop the column `Misi` on the `prodi` table. All the data in the column will be lost.
  - Added the required column `misi` to the `Prodi` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `prodi` DROP COLUMN `Misi`,
    ADD COLUMN `misi` LONGTEXT NOT NULL;
