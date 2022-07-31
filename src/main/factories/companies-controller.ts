import { CompaniesLoaderService } from '@data/services'
import { CompaniesLoaderPrismaRepository } from '@infra/repositories'
import { Controller } from '@presentation/contracts'
import { LoadCompaniesController } from '@presentation/controllers'

export const makeCompaniesLoaderController = (): Controller => {
  const companiesLoaderRepository = new CompaniesLoaderPrismaRepository()
  const companiesLoaderService = new CompaniesLoaderService(companiesLoaderRepository)
  return new LoadCompaniesController(companiesLoaderService)
}
