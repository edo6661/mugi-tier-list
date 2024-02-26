-- AlterTable
ALTER TABLE "User" ALTER COLUMN "email" DROP NOT NULL;
ALTER TABLE "User" ALTER COLUMN "password" DROP NOT NULL;

-- CreateTable
CREATE TABLE "TierList" (
    "id" STRING NOT NULL,
    "title" STRING NOT NULL,
    "description" STRING,
    "imageUrl" STRING,
    "ownerId" STRING NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "TierList_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "TierListItem" (
    "id" STRING NOT NULL,
    "itemId" STRING NOT NULL,
    "tierListId" STRING NOT NULL,
    "rankId" STRING NOT NULL,

    CONSTRAINT "TierListItem_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Item" (
    "id" STRING NOT NULL,
    "name" STRING,
    "description" STRING,
    "imageUrl" STRING,

    CONSTRAINT "Item_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Rank" (
    "id" STRING NOT NULL,
    "name" STRING NOT NULL,
    "imageUrl" STRING,

    CONSTRAINT "Rank_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Comment" (
    "id" STRING NOT NULL,
    "content" STRING NOT NULL,
    "userId" STRING NOT NULL,
    "tierListId" STRING NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Comment_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE INDEX "TierList_title_idx" ON "TierList"("title");

-- CreateIndex
CREATE INDEX "TierListItem_itemId_tierListId_rankId_idx" ON "TierListItem"("itemId", "tierListId", "rankId");

-- CreateIndex
CREATE INDEX "Item_name_idx" ON "Item"("name");

-- CreateIndex
CREATE INDEX "Rank_name_idx" ON "Rank"("name");

-- CreateIndex
CREATE INDEX "Comment_userId_tierListId_idx" ON "Comment"("userId", "tierListId");

-- CreateIndex
CREATE INDEX "User_username_idx" ON "User"("username");

-- AddForeignKey
ALTER TABLE "TierList" ADD CONSTRAINT "TierList_ownerId_fkey" FOREIGN KEY ("ownerId") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "TierListItem" ADD CONSTRAINT "TierListItem_itemId_fkey" FOREIGN KEY ("itemId") REFERENCES "Item"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "TierListItem" ADD CONSTRAINT "TierListItem_tierListId_fkey" FOREIGN KEY ("tierListId") REFERENCES "TierList"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "TierListItem" ADD CONSTRAINT "TierListItem_rankId_fkey" FOREIGN KEY ("rankId") REFERENCES "Rank"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Comment" ADD CONSTRAINT "Comment_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Comment" ADD CONSTRAINT "Comment_tierListId_fkey" FOREIGN KEY ("tierListId") REFERENCES "TierList"("id") ON DELETE CASCADE ON UPDATE CASCADE;
