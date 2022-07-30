import { LoadParamsDTO } from '@data/dtos'
import { CompanyModel } from '@data/models'

export interface CompaniesLoaderRepository {
  loadCompanies: (params: LoadParamsDTO) => Promise<CompanyModel[]>
}
