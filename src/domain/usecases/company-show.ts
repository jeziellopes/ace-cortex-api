import { LoadCompanyParamsDTO } from '@data/dtos'
import { CompanyModel } from '@data/models'

export interface CompanyShow {
  show: (params: LoadCompanyParamsDTO) => Promise<CompanyModel>
}
