
import { CompanyShowRepository } from '@data/contracts'
import { ShowCompanyParamsDTO } from '@data/dtos'
import { CompanyModel } from '@data/models'
import { CompanyShow } from '@domain/usecases'

export class CompanyShowService implements CompanyShow {
  constructor (private readonly companyShowRepository: CompanyShowRepository) {
    this.companyShowRepository = companyShowRepository
  }

  async show (params: ShowCompanyParamsDTO): Promise<CompanyModel> {
    return this.companyShowRepository.showCompany(params)
  }
}
