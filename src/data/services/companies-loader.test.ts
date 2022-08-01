import { CompaniesLoaderService } from '@data/services'
import { Company } from '@domain/entities'
import { FakeCompaniesLoaderRepository } from '@infra/repositories'

describe('Data', () => {
  test('Companies loader service instance', () => {
    const fakeRepo = new FakeCompaniesLoaderRepository()
    const sut = new CompaniesLoaderService(fakeRepo)
    expect(sut).toBeInstanceOf(CompaniesLoaderService)
  })

  test('Companies loader service instance', () => {
    const fakeRepo = new FakeCompaniesLoaderRepository()
    const companiesLoader = new CompaniesLoaderService(fakeRepo)
    const sut = companiesLoader.load({ limit: 8, cursor: 0 })
    expect(sut).toBeInstanceOf(Promise<Company[]>)
  })
})
