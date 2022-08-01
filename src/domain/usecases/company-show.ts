import { ShowCompanyParamsDTO } from '@data/dtos'
import { CompanyModel } from '@data/models'

export interface CompanyShow {
  show: (params: ShowCompanyParamsDTO) => Promise<CompanyModel>
}
