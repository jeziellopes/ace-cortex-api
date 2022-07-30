import { Company } from '@domain/entities'

export class CompanyViewModel {
  name: string
  tax_id: string
  demand: string
  annual_income: string
  about: string

  static map (entity: Company): CompanyViewModel {
    return {
      name: entity.name,
      tax_id: entity.tax_id,
      demand: entity.demand,
      annual_income: entity.annual_income,
      about: entity.about
    }
  }

  static mapCollection (entities: Company[]): CompanyViewModel[] {
    return entities.map(CompanyViewModel.map)
  }
}
