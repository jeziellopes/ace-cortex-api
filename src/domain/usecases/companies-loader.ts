import { LoadCompaniesBodyDTO } from '@data/dtos'
import { CompanyModel } from '@data/models'

export interface CompaniesLoader {
  load: (params: LoadCompaniesBodyDTO) => Promise<CompanyModel[]>
}
