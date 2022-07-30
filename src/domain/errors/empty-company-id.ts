export class EmptyCompanyIdError extends Error {
  constructor () {
    super('Empty Company Id')
    this.name = 'EmptyCompanyIdError'
  }
}
