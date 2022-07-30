import { Controller } from '@presentation/contracts'
import { Request, Response } from 'express'

export class ExpressRouterAdapter {
  static adapt (controller: Controller) {
    return async (request: Request, response: Response) => {
      const httpResponse = await controller.handle(request)

      response.status(httpResponse.statusCode).json(httpResponse.data)
    }
  }
}
