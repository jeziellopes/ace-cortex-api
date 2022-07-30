
import { CompaniesLoaderRepository } from '@data/contracts'
import { LoadParamsDTO } from '@data/dtos'
import { Company } from '@domain/entities'
import { CompaniesLoader } from '@domain/usecases'

export class CompaniesLoaderService implements CompaniesLoader {
  constructor (private readonly companiesLoaderRepository: CompaniesLoaderRepository) {
    this.companiesLoaderRepository = companiesLoaderRepository
  }

  async load (params: LoadParamsDTO): Promise<Company[]> {
    return this.companiesLoaderRepository.loadCompanies(params)
  }
}
