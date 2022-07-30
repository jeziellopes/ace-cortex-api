import { CompanyShowService } from '@data/services'
import { FakeCompanyShowRepository } from '@infra/repositories'
import { Controller } from '@presentation/contracts'
import { ShowCompanyController } from '@presentation/controllers'

export const makeCompanyShowController = (): Controller => {
  const companyShowRepository = new FakeCompanyShowRepository()
  const companyShowService = new CompanyShowService(companyShowRepository)
  return new ShowCompanyController(companyShowService)
}
