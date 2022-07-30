import { CompanyShow } from '@domain/usecases'
import { Controller, HttpRequest, HttpResponse, ok, serverError } from '@presentation/contracts'
import { CompanyViewModel } from '@presentation/view-models'

import { EmptyCompanyIdError } from '../../domain/errors/empty-company-id'

export class ShowCompanyController implements Controller {
  constructor (private readonly companyShow: CompanyShow) {
    this.companyShow = companyShow
  }

  async handle (httpRequest: HttpRequest): Promise<HttpResponse<CompanyViewModel>> {
    try {
      const company = await this.companyShow.show(httpRequest.params)

      if (httpRequest.params === undefined) {
        throw new EmptyCompanyIdError()
      }

      return ok(CompanyViewModel.map(company))
    } catch (error) {
      return serverError(error as Error)
    }
  }
}
