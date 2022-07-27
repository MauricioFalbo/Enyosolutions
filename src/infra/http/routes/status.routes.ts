import express from 'express'

import { adaptRoute } from '@core/infra/adapters/ExpressRouteAdapter'
import { Controller } from '@core/infra/Controller'
import { HttpResponse, ok } from '@core/infra/HttpResponse'

const statusRouter = express.Router()

class GetStatusController implements Controller {
  nameClass = GetStatusController.name

  async handle(): Promise<HttpResponse> {
    return ok({ message: 'API RUNNING' })
  }
}

function makeGetStatusController(): Controller {
  return new GetStatusController()
}

statusRouter.get('/', adaptRoute(makeGetStatusController()))

export { statusRouter }
