import { LoadCompaniesBodyDTO } from '@data/dtos'
import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

export const loadCompaniesPrismaDataSource = async ({
  limit,
  cursor
}: LoadCompaniesBodyDTO) => {
  return prisma.company.findMany(
    {
      skip: cursor,
      take: limit,
      include: { annualIncome: true }
    }
  )
}
