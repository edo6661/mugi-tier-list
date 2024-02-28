-- DropIndex
DROP INDEX "User_username_idx";

-- AlterTable
ALTER TABLE "TierListItem" ALTER COLUMN "rankId" DROP NOT NULL;

-- AlterTable
ALTER TABLE "User" ADD COLUMN     "imageUrl" STRING;

-- CreateIndex
CREATE INDEX "User_username_id_idx" ON "User"("username", "id");
