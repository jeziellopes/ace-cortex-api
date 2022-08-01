import { ShowCompanyParamsDTO } from '@data/dtos'
import { CompanyModel } from '@data/models'

export interface CompanyShowRepository {
  showCompany: (params: ShowCompanyParamsDTO) => Promise<CompanyModel>
}
