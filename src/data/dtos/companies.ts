export class LoadCompanyRequestParams {
  companyId: string
}

export class LoadParamsDTO {
  companyId: number

  static map (entity: LoadCompanyRequestParams): LoadParamsDTO {
    return {
      companyId: Number(entity.companyId)
    }
  }
}
