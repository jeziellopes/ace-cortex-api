import { CompanyModel } from '@data/models'
import { CompanyViewModel } from '@presentation/view-models/company'

describe('Presentation View Models', () => {
  test('Company view model map', () => {
    const mockCompany = {
      id: 1,
      name: 'Buser',
      photo: 'https://acestartups.com.br/wp-content/uploads/2021/06/Wallpaper-2-1024x576.png',
      taxId: '29365880000381',
      about: 'A plataforma conecta viajantes a outras pessoas interessadas na mesma viagem. Juntas, elas podem fretar um ônibus junto à empresas de transporte executivo especializadas, possibilitando economias de até 60%.',
      demand: 1000000000,
      annualIncome: {
        id: 1,
        description: 'Até R$ 10 milhões'
      }
    } as CompanyModel
    const sut = CompanyViewModel.map(mockCompany)
    expect(sut).toEqual({
      id: '1',
      name: 'Buser',
      photo: 'https://acestartups.com.br/wp-content/uploads/2021/06/Wallpaper-2-1024x576.png',
      taxId: '29365880000381',
      about: 'A plataforma conecta viajantes a outras pessoas interessadas na mesma viagem. Juntas, elas podem fretar um ônibus junto à empresas de transporte executivo especializadas, possibilitando economias de até 60%.',
      demand: 1000000000,
      annualIncome: 'Até R$ 10 milhões'
    })
  })
})
