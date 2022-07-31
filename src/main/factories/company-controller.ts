import { CompanyShowService } from '@data/services'
import { CompanyShowPrismaRepository } from '@infra/repositories'
import { Controller } from '@presentation/contracts'
import { ShowCompanyController } from '@presentation/controllers'

export const makeCompanyShowController = (): Controller => {
  const companyShowRepository = new CompanyShowPrismaRepository()
  const companyShowService = new CompanyShowService(companyShowRepository)
  return new ShowCompanyController(companyShowService)
}
