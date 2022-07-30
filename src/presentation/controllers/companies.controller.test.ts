import { CompaniesLoaderService } from '@data/services'
import { FakeCompaniesLoaderRepository } from '@infra/repositories'
import { HttpRequest, HttpResponse } from '@presentation/contracts'
import { LoadCompaniesController } from '@presentation/controllers'
import { CompanyViewModel } from '@presentation/view-models'

describe('Companies Presentation Controllers', () => {
  test('Load company loader controller instance', () => {
    const fakeRepo = new FakeCompaniesLoaderRepository()
    const companiesLoader = new CompaniesLoaderService(fakeRepo)
    const sut = new LoadCompaniesController(companiesLoader)
    expect(sut).toBeInstanceOf(LoadCompaniesController)
  })

  test('Make companies loader controller success handling', async () => {
    const mockRequest = { params: { } } as HttpRequest
    const fakeRepo = new FakeCompaniesLoaderRepository()
    const companiesLoader = new CompaniesLoaderService(fakeRepo)
    const sut = new LoadCompaniesController(companiesLoader)
    expect(sut.handle(mockRequest)).toBeInstanceOf(Promise<HttpResponse<CompanyViewModel[]>>)
  })

  test('Make companies loader controller error handling', async () => {
    const mockRequest = { params: { page: 1, limit: 10 } } as HttpRequest
    const fakeRepo = new FakeCompaniesLoaderRepository()
    const companiesLoader = new CompaniesLoaderService(fakeRepo)
    const controller = new LoadCompaniesController(companiesLoader)
    const sut = controller.handle(mockRequest)
    expect(sut).toBeInstanceOf(Promise<Error>)
  })
})
