import { HttpRequest, HttpResponse } from './http.contract'

export interface Controller {
  handle: (request: HttpRequest) => Promise<HttpResponse>
}
