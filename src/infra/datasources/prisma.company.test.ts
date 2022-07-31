import { Company } from '@domain/entities'
import { showCompanyPrismaDataSource } from '@infra/datasources'

describe('Datasources', () => {
  test('Prisma company', () => {
    const companyId = 1
    const sut = showCompanyPrismaDataSource(companyId)
    expect(sut).toBeInstanceOf(Promise<Company>)
  })
})
