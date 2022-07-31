import { CompanyShowRepository } from '@data/contracts'
import { LoadParamsDTO } from '@data/dtos'
import { CompanyModel } from '@data/models'
import { showCompanyPrismaDataSource } from '@infra/datasources'

export class CompanyShowPrismaRepository implements CompanyShowRepository {
  async showCompany (params: LoadParamsDTO): Promise<CompanyModel> {
    return showCompanyPrismaDataSource(params.companyId)
  }
}
