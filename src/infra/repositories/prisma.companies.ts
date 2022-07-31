import { CompaniesLoaderRepository } from '@data/contracts'
import { CompanyModel } from '@data/models'
import { loadCompaniesPrismaDataSource } from '@infra/datasources'

export class CompaniesLoaderPrismaRepository implements CompaniesLoaderRepository {
  async loadCompanies (): Promise<CompanyModel[]> {
    return loadCompaniesPrismaDataSource()
  }
}
