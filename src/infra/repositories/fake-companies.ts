import { CompaniesLoaderRepository } from '@data/contracts'
import { CompanyModel } from '@data/models'
import { companies as fakeCompanies } from '@infra/datasources'

export class FakeCompaniesLoaderRepository implements CompaniesLoaderRepository {
  async loadCompanies (): Promise<CompanyModel[]> {
    return fakeCompanies
  }
}
