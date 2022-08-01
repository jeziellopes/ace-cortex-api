import { LoadCompaniesBodyDTO } from '@data/dtos'
import { CompanyModel } from '@data/models'

export interface CompaniesLoaderRepository {
  loadCompanies: (params: LoadCompaniesBodyDTO) => Promise<CompanyModel[]>
}
