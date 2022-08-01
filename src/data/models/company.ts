import { AnnualIncomeModel } from '@data/models/annualIncome'

export type CompanyModel = {
  id: string,
  name: string
  taxId: string
  demand: number
  annualIncome: AnnualIncomeModel
  about: string
  photo: string
}
