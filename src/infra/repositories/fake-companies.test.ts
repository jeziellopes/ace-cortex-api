import { Company } from '@domain/entities'
import { FakeCompaniesLoaderRepository } from '@infra/repositories'

describe('Repositories', () => {
  test('Companies loader repository instance', () => {
    const sut = new FakeCompaniesLoaderRepository()
    expect(sut).toBeInstanceOf(FakeCompaniesLoaderRepository)
  })

  test('Companies loader repository load companies', () => {
    const fakeRepo = new FakeCompaniesLoaderRepository()
    const sut = fakeRepo.loadCompanies()
    expect(sut).toBeInstanceOf(Promise<Company[]>)
  })
})
