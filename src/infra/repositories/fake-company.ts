import { CompanyShowRepository } from '@data/contracts'
import { LoadParamsDTO } from '@data/dtos'
import { CompanyModel } from '@data/models'
import { company as fakeCompany } from '@infra/datasources'

export class FakeCompanyShowRepository implements CompanyShowRepository {
  async showCompany (params: LoadParamsDTO): Promise<CompanyModel> {
    return fakeCompany
  }
}
