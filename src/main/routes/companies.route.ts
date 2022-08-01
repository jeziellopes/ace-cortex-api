
import { ExpressRouterAdapter } from '@main/adapters'
import { makeCompaniesLoaderController } from '@main/factories'
import { Router } from 'express'

export default (router: Router): void => {
  router.post('/companies', ExpressRouterAdapter.adapt(makeCompaniesLoaderController()))
}
