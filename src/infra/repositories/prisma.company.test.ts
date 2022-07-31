import { Company } from '@domain/entities'
import { CompanyShowPrismaRepository } from '@infra/repositories'

describe('Repositories', () => {
  test('Company show repository instance', () => {
    const mockParams = { companyId: 1 }
    const repo = new CompanyShowPrismaRepository()
    const sut = repo.showCompany(mockParams)

    expect(sut).toBeInstanceOf(Promise<Company>)
  })
})
