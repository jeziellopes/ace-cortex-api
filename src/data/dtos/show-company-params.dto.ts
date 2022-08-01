export class ShowCompanyRequestParams {
  companyId: string
}

export class ShowCompanyParamsDTO {
  companyId: number

  static map (entity: ShowCompanyRequestParams): ShowCompanyParamsDTO {
    return {
      companyId: Number(entity.companyId)
    }
  }
}
