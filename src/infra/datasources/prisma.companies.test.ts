import { Company } from '@domain/entities'
import { loadCompaniesPrismaDataSource } from '@infra/datasources'

describe('Datasources', () => {
  test('Prisma companies', () => {
    const sut = loadCompaniesPrismaDataSource({ limit: 5, cursor: 3 })
    expect(sut).toBeInstanceOf(Promise<Company[]>)
  })
})
