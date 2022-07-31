import { Company } from '@domain/entities'
import { loadCompaniesPrismaDataSource } from '@infra/datasources'

describe('Datasources', () => {
  test('Prisma companies', () => {
    const sut = loadCompaniesPrismaDataSource()
    expect(sut).toBeInstanceOf(Promise<Company[]>)
  })
})
