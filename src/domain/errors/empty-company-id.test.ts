import { EmptyCompanyIdError } from './empty-company-id'

describe('Errors', () => {
  test('Empty company id error instance', () => {
    const sut = new EmptyCompanyIdError()
    expect(sut).toBeInstanceOf(EmptyCompanyIdError)
  })

  test('Empty company id error name', () => {
    const sut = new EmptyCompanyIdError()
    expect(sut.name).toStrictEqual('EmptyCompanyIdError')
  })
})
