import { makeCompaniesLoaderController } from '@main/factories'
import { LoadCompaniesController } from '@presentation/controllers'

describe('Companies', () => {
  test('Make companies loader controller instance', () => {
    const sut = makeCompaniesLoaderController()
    expect(sut).toBeInstanceOf(LoadCompaniesController)
  })
})
