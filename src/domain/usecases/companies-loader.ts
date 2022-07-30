import { LoadParamsDTO } from '@data/dtos'
import { Company } from '@domain/entities'

export interface CompaniesLoader {
  load: (params: LoadParamsDTO) => Promise<Company[]>
}
