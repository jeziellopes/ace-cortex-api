import { CompanyShowRepository } from '@data/contracts'
import { ShowCompanyParamsDTO } from '@data/dtos'
import { CompanyModel } from '@data/models'
import { showCompanyPrismaDataSource } from '@infra/datasources'

export class CompanyShowPrismaRepository implements CompanyShowRepository {
  async showCompany (params: ShowCompanyParamsDTO): Promise<CompanyModel> {
    return showCompanyPrismaDataSource(params.companyId)
  }
}
