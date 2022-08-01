
import { CompaniesLoaderRepository } from '@data/contracts'
import { LoadCompaniesBodyDTO } from '@data/dtos'
import { CompanyModel } from '@data/models'
import { CompaniesLoader } from '@domain/usecases'

export class CompaniesLoaderService implements CompaniesLoader {
  constructor (private readonly companiesLoaderRepository: CompaniesLoaderRepository) {
    this.companiesLoaderRepository = companiesLoaderRepository
  }

  async load (params: LoadCompaniesBodyDTO): Promise<CompanyModel[]> {
    return this.companiesLoaderRepository.loadCompanies(params)
  }
}
