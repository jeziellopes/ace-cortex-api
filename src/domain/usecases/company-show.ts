import { LoadParamsDTO } from '@data/dtos'
import { Company } from '@domain/entities'

export interface CompanyShow {
  show: (params: LoadParamsDTO) => Promise<Company>
}
