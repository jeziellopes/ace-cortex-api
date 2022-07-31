-- CreateTable
CREATE TABLE "Company" (
    "id" SERIAL NOT NULL,
    "taxId" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "about" TEXT NOT NULL,
    "demand" INTEGER NOT NULL,
    "annualIncomeId" INTEGER NOT NULL,
    "photo" TEXT NOT NULL,

    CONSTRAINT "Company_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "AnnualIncome" (
    "id" SERIAL NOT NULL,
    "description" TEXT NOT NULL,

    CONSTRAINT "AnnualIncome_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Company_taxId_key" ON "Company"("taxId");

-- AddForeignKey
ALTER TABLE "Company" ADD CONSTRAINT "Company_annualIncomeId_fkey" FOREIGN KEY ("annualIncomeId") REFERENCES "AnnualIncome"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
