import { CompanyModel } from '@data/models'

export class CompanyViewModel {
  id: string
  name: string
  photo: string
  taxId: string
  demand: number
  annualIncome: string
  about: string

  static map (entity: CompanyModel): CompanyViewModel {
    return {
      id: String(entity.id),
      name: entity.name,
      about: entity.about,
      taxId: entity.taxId,
      demand: entity.demand,
      annualIncome: entity.annualIncome?.description,
      photo: entity.photo
    }
  }

  static mapCollection (entities: CompanyModel[]): CompanyViewModel[] {
    return entities.map(CompanyViewModel.map)
  }
}
