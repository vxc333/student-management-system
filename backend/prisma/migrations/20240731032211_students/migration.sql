/*
  Warnings:

  - You are about to drop the `clients` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropTable
DROP TABLE "clients";

-- CreateTable
CREATE TABLE "student" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "age" INTEGER NOT NULL,

    CONSTRAINT "student_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "student_email_key" ON "student"("email");
