/*
  Warnings:

  - Changed the type of `contact_number` on the `Donation` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.

*/
-- AlterTable
ALTER TABLE "Donation" DROP COLUMN "contact_number",
ADD COLUMN     "contact_number" INTEGER NOT NULL;

-- AlterTable
ALTER TABLE "Requests" ADD COLUMN     "completed" BOOLEAN NOT NULL DEFAULT false;
