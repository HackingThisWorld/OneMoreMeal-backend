/*
  Warnings:

  - You are about to drop the column `number` on the `Requests` table. All the data in the column will be lost.
  - Added the required column `phone_number` to the `Requests` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Requests" DROP COLUMN "number",
ADD COLUMN     "phone_number" INTEGER NOT NULL;
