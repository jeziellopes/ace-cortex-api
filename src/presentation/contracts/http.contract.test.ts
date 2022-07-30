import { serverError, ok } from '@presentation/contracts'

describe('Presentation Contracts', () => {
  test('Server error status code', () => {
    const mockError = new Error()
    const sut = serverError(mockError)
    expect(sut.statusCode).toBe(500)
  })

  test('Ok status code', () => {
    const mockData = {}
    const sut = ok(mockData)
    expect(sut.statusCode).toBe(200)
  })
})
