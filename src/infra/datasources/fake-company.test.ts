import { Company } from '@domain/entities'
import { company } from '@infra/datasources'

describe('Datasources', () => {
  test('Fake company', () => {
    const sut = company
    expect(sut).toEqual(expect.objectContaining({} as Company))
  })
})
