/*
  Warnings:

  - You are about to drop the column `description` on the `Item` table. All the data in the column will be lost.
  - You are about to drop the column `name` on the `Item` table. All the data in the column will be lost.
  - Made the column `imageUrl` on table `Item` required. This step will fail if there are existing NULL values in that column.
  - Added the required column `externalUserId` to the `User` table without a default value. This is not possible if the table is not empty.

*/
-- DropIndex
DROP INDEX "Item_name_idx";

-- DropIndex
DROP INDEX "User_username_key";

-- AlterTable
ALTER TABLE "Item" DROP COLUMN "description";
ALTER TABLE "Item" DROP COLUMN "name";
ALTER TABLE "Item" ALTER COLUMN "imageUrl" SET NOT NULL;

-- AlterTable
ALTER TABLE "Rank" ADD COLUMN     "color" STRING;

-- AlterTable
ALTER TABLE "User" ADD COLUMN     "externalUserId" STRING NOT NULL;
ALTER TABLE "User" ALTER COLUMN "username" DROP NOT NULL;

-- CreateTable
CREATE TABLE "Account" (
    "id" STRING NOT NULL,
    "userId" STRING NOT NULL,
    "providerType" STRING NOT NULL,
    "providerId" STRING NOT NULL,
    "providerAccountId" STRING NOT NULL,
    "refreshToken" STRING,
    "accessToken" STRING,
    "accessTokenExpires" TIMESTAMP(3),
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Account_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Account_providerId_providerAccountId_key" ON "Account"("providerId", "providerAccountId");

-- AddForeignKey
ALTER TABLE "Account" ADD CONSTRAINT "Account_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
