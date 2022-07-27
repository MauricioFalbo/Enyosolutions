import { Request, Response } from 'express'

import { Controller } from '@core/infra/Controller'

export const adaptRoute = (controller: Controller) => {
  return async (request: Request, response: Response) => {
    const requestData = {
      body: request.body,
      ...request.params,
      ...request.query,
    }
    console.log('REQUEST: ', requestData)
    const httpResponse = await controller.handle(requestData)

    if (httpResponse.statusCode >= 200 && httpResponse.statusCode <= 299) {
      console.log('RESPONSE: ', httpResponse)
      return response.status(httpResponse.statusCode).json(httpResponse.body)
    } else {
      console.error('ERROR: ', httpResponse)
      return response.status(httpResponse.statusCode).json({
        error: httpResponse.body.error,
      })
    }
  }
}
