
import { CompanyShowRepository } from '@data/contracts'
import { LoadCompanyParamsDTO } from '@data/dtos'
import { CompanyModel } from '@data/models'
import { CompanyShow } from '@domain/usecases'

export class CompanyShowService implements CompanyShow {
  constructor (private readonly companyShowRepository: CompanyShowRepository) {
    this.companyShowRepository = companyShowRepository
  }

  async show (params: LoadCompanyParamsDTO): Promise<CompanyModel> {
    return this.companyShowRepository.showCompany(params)
  }
}
