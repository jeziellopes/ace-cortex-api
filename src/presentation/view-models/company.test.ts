import { Company } from '@domain/entities'
import { CompanyViewModel } from '@presentation/view-models/company'

describe('Presentation View Models', () => {
  test('Company view model map', () => {
    const mockCompany = {} as Company
    const sut = CompanyViewModel.map(mockCompany)
    expect(sut).toEqual({} as CompanyViewModel)
  })
})
