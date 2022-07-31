import { Company } from '@domain/entities'
import { CompaniesLoaderPrismaRepository } from '@infra/repositories'

describe('Repositories', () => {
  test('Companies loader repository instance', () => {
    const repo = new CompaniesLoaderPrismaRepository()
    const sut = repo.loadCompanies()

    expect(sut).toBeInstanceOf(Promise<Company>)
  })
})
