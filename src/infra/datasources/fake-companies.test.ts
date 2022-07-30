import { Company } from '@domain/entities'
import { companies } from '@infra/datasources'

describe('Datasources', () => {
  test('Fake companies', () => {
    const sut = companies
    expect(sut).toBeInstanceOf(Array<Company>)
  })
})
