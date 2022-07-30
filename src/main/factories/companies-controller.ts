import { CompaniesLoaderService } from '@data/services'
import { FakeCompaniesLoaderRepository } from '@infra/repositories'
import { Controller } from '@presentation/contracts'
import { LoadCompaniesController } from '@presentation/controllers'

export const makeCompaniesLoaderController = (): Controller => {
  const companiesLoaderRepository = new FakeCompaniesLoaderRepository()
  const companiesLoaderService = new CompaniesLoaderService(companiesLoaderRepository)
  return new LoadCompaniesController(companiesLoaderService)
}
