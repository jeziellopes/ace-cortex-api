import { makeCompanyShowController } from '@main/factories'
import { ShowCompanyController } from '@presentation/controllers'

describe('Company', () => {
  test('Make company show controller instance', () => {
    const sut = makeCompanyShowController()
    expect(sut).toBeInstanceOf(ShowCompanyController)
  })
})
