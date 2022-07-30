
import { ExpressRouterAdapter } from '@main/adapters'
import { makeCompanyShowController } from '@main/factories'
import { Router } from 'express'

export default (router: Router): void => {
  router.get('/companies/:companyId', ExpressRouterAdapter.adapt(makeCompanyShowController()))
}
