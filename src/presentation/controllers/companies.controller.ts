import { CompaniesLoader } from '@domain/usecases'
import { Controller, HttpResponse, ok, serverError } from '@presentation/contracts'
import { CompanyViewModel } from '@presentation/view-models'

import { HttpRequest } from '../contracts/http.contract'

export class LoadCompaniesController implements Controller {
  constructor (private readonly companiesLoader: CompaniesLoader) {
    this.companiesLoader = companiesLoader
  }

  async handle (httpRequest: HttpRequest): Promise<HttpResponse<CompanyViewModel[]>> {
    try {
      const companies = await this.companiesLoader.load(httpRequest.body)

      return ok({
        companies: CompanyViewModel.mapCollection(companies),
        nextId: (companies.pop()?.id || -1) + 1
      })
    } catch (error) {
      return serverError(error as Error)
    }
  }
}
