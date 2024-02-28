/*
  Warnings:

  - A unique constraint covering the columns `[externalUserId]` on the table `User` will be added. If there are existing duplicate values, this will fail.

*/
-- DropIndex
DROP INDEX "User_username_id_idx";

-- CreateIndex
CREATE UNIQUE INDEX "User_externalUserId_key" ON "User"("externalUserId");

-- CreateIndex
CREATE INDEX "User_username_id_externalUserId_idx" ON "User"("username", "id", "externalUserId");
