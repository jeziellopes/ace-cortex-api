import { ShowCompanyParamsDTO } from '@data/dtos'
import { CompanyShowService } from '@data/services'
import { Company } from '@domain/entities'
import { FakeCompanyShowRepository } from '@infra/repositories'

describe('Data', () => {
  test('Company show service instance', () => {
    const fakeRepo = new FakeCompanyShowRepository()
    const sut = new CompanyShowService(fakeRepo)
    expect(sut).toBeInstanceOf(CompanyShowService)
  })

  test('Companies loader service instance', () => {
    const fakeRepo = new FakeCompanyShowRepository()
    const companyShow = new CompanyShowService(fakeRepo)
    const mock: ShowCompanyParamsDTO = { companyId: 1 }
    const sut = companyShow.show(mock)
    expect(sut).toBeInstanceOf(Promise<Company>)
  })
})
