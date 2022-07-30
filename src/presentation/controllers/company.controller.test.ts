import { CompanyShowService } from '@data/services'
import { FakeCompanyShowRepository } from '@infra/repositories'
import { HttpRequest, HttpResponse } from '@presentation/contracts'
import { ShowCompanyController } from '@presentation/controllers'
import { CompanyViewModel } from '@presentation/view-models'

describe('Company Presentation Controllers', () => {
  test('Load company show controller instance', () => {
    const fakeRepo = new FakeCompanyShowRepository()
    const companiesLoader = new CompanyShowService(fakeRepo)
    const sut = new ShowCompanyController(companiesLoader)
    expect(sut).toBeInstanceOf(ShowCompanyController)
  })

  test('Make company show controller success handling', async () => {
    const mockRequest = { params: { } } as HttpRequest
    const fakeRepo = new FakeCompanyShowRepository()
    const companiesLoader = new CompanyShowService(fakeRepo)
    const sut = new ShowCompanyController(companiesLoader)
    expect(sut.handle(mockRequest)).toBeInstanceOf(Promise<HttpResponse<CompanyViewModel>>)
  })

  test('Make companies loader controller error handling', async () => {
    const mockRequest = {} as HttpRequest
    const fakeRepo = new FakeCompanyShowRepository()
    const companiesLoader = new CompanyShowService(fakeRepo)
    const controller = new ShowCompanyController(companiesLoader)
    const sut = controller.handle(mockRequest)
    expect(sut).toBeInstanceOf(Promise<Error>)
  })
})
