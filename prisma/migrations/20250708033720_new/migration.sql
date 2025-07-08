/*
  Warnings:

  - You are about to drop the column `link` on the `prodi` table. All the data in the column will be lost.
  - Added the required column `Misi` to the `Prodi` table without a default value. This is not possible if the table is not empty.
  - Added the required column `visi` to the `Prodi` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `prodi` DROP COLUMN `link`,
    ADD COLUMN `Misi` LONGTEXT NOT NULL,
    ADD COLUMN `visi` LONGTEXT NOT NULL;
