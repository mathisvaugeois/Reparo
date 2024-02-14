/*
  Warnings:

  - Added the required column `price` to the `Annonce` table without a default value. This is not possible if the table is not empty.
  - Added the required column `region` to the `Annonce` table without a default value. This is not possible if the table is not empty.
  - Made the column `content` on table `Annonce` required. This step will fail if there are existing NULL values in that column.

*/
-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Annonce" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "title" TEXT NOT NULL,
    "content" TEXT NOT NULL,
    "published" BOOLEAN NOT NULL DEFAULT false,
    "authorId" TEXT,
    "imageUrl" TEXT,
    "region" TEXT NOT NULL,
    "price" REAL NOT NULL,
    CONSTRAINT "Annonce_authorId_fkey" FOREIGN KEY ("authorId") REFERENCES "users" ("id") ON DELETE SET NULL ON UPDATE CASCADE
);
INSERT INTO "new_Annonce" ("authorId", "content", "id", "published", "title") SELECT "authorId", "content", "id", "published", "title" FROM "Annonce";
DROP TABLE "Annonce";
ALTER TABLE "new_Annonce" RENAME TO "Annonce";
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
