import { CompaniesLoaderRepository } from '@data/contracts'
import { LoadCompaniesBodyDTO, LoadCompaniesRequestParams } from '@data/dtos/'
import { CompanyModel } from '@data/models'
import { loadCompaniesPrismaDataSource } from '@infra/datasources'

export class CompaniesLoaderPrismaRepository implements CompaniesLoaderRepository {
  async loadCompanies (params: LoadCompaniesRequestParams): Promise<CompanyModel[]> {
    return loadCompaniesPrismaDataSource(LoadCompaniesBodyDTO.map(params))
  }
}
