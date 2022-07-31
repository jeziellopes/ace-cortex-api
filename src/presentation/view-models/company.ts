import { Company } from '@domain/entities'

export class CompanyViewModel {
  name: string
  photo: string
  taxId: string
  demand: number
  annualIncomeId: number
  about: string

  static map (entity: Company): CompanyViewModel {
    return {
      name: entity.name,
      about: entity.about,
      taxId: entity.taxId,
      demand: entity.demand,
      annualIncomeId: entity.annualIncomeId,
      photo: entity.photo
    }
  }

  static mapCollection (entities: Company[]): CompanyViewModel[] {
    return entities.map(CompanyViewModel.map)
  }
}
