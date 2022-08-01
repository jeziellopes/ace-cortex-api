export class LoadCompaniesRequestParams {
  limit?: string
  cursor?: string
}

export class LoadCompaniesBodyDTO {
  limit?: number
  cursor?: number

  static map (entity: LoadCompaniesRequestParams): LoadCompaniesBodyDTO {
    return {
      limit: Number(entity.limit) || undefined,
      cursor: Number(entity.cursor) || undefined
    }
  }
}
