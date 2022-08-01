import { CompanyShowRepository } from '@data/contracts'
import { ShowCompanyParamsDTO } from '@data/dtos'
import { CompanyModel } from '@data/models'
import { company as fakeCompany } from '@infra/datasources'

export class FakeCompanyShowRepository implements CompanyShowRepository {
  async showCompany (params: ShowCompanyParamsDTO): Promise<CompanyModel> {
    return fakeCompany
  }
}
