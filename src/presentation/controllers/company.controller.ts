import { ShowCompanyParamsDTO } from '@data/dtos'
import { EmptyCompanyIdError } from '@domain/errors/empty-company-id'
import { CompanyShow } from '@domain/usecases'
import { Controller, HttpRequest, HttpResponse, ok, serverError } from '@presentation/contracts'
import { CompanyViewModel } from '@presentation/view-models'

export class ShowCompanyController implements Controller {
  constructor (private readonly companyShow: CompanyShow) {
    this.companyShow = companyShow
  }

  async handle (httpRequest: HttpRequest): Promise<HttpResponse<CompanyViewModel>> {
    try {
      const company = await this.companyShow.show(ShowCompanyParamsDTO.map(httpRequest.params))

      if (httpRequest.params === undefined) {
        throw new EmptyCompanyIdError()
      }

      return ok(CompanyViewModel.map(company))
    } catch (error) {
      return serverError(error as Error)
    }
  }
}
