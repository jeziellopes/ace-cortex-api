
import { CompanyShowRepository } from '@data/contracts'
import { LoadParamsDTO } from '@data/dtos'
import { Company } from '@domain/entities'
import { CompanyShow } from '@domain/usecases'

export class CompanyShowService implements CompanyShow {
  constructor (private readonly companyShowRepository: CompanyShowRepository) {
    this.companyShowRepository = companyShowRepository
  }

  async show (params: LoadParamsDTO): Promise<Company> {
    return this.companyShowRepository.showCompany(params)
  }
}
