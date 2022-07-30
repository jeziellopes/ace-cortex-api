import { LoadParamsDTO } from '@data/dtos'
import { CompanyModel } from '@data/models'

export interface CompanyShowRepository {
  showCompany: (params: LoadParamsDTO) => Promise<CompanyModel>
}
