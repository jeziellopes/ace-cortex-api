import { Company } from '@domain/entities'
import { FakeCompanyShowRepository } from '@infra/repositories'

describe('Repositories', () => {
  test('Company show repository instance', () => {
    const sut = new FakeCompanyShowRepository()
    expect(sut).toBeInstanceOf(FakeCompanyShowRepository)
  })

  test('Company show repository show company', () => {
    const mockParams = { companyId: 1 }
    const fakeRepo = new FakeCompanyShowRepository()
    const sut = fakeRepo.showCompany(mockParams)
    expect(sut).toBeInstanceOf(Promise<Company>)
  })
})
