export class LoadCompanyRequestParams {
  companyId: string
}

export class LoadCompanyParamsDTO {
  companyId: number

  static map (entity: LoadCompanyRequestParams): LoadCompanyParamsDTO {
    return {
      companyId: Number(entity.companyId)
    }
  }
}
