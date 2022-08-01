import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

export const showCompanyPrismaDataSource = async (companyId: number) => prisma.company.findUniqueOrThrow({
  where: {
    id: companyId
  },
  include: { annualIncome: true }
})
