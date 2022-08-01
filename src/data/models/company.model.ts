import { AnnualIncomeModel } from '@data/models/annualIncome.model'

export type CompanyModel = {
  id: number,
  name: string
  taxId: string
  demand: number
  annualIncome: AnnualIncomeModel
  about: string
  photo: string
}
