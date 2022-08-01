import { LoadCompaniesRequestParams } from '@data/dtos'
import { CompanyModel } from '@data/models'

export interface CompaniesLoaderRepository {
  loadCompanies: (params: LoadCompaniesRequestParams) => Promise<CompanyModel[]>
}
