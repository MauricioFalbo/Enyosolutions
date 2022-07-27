import { adaptRoute } from '@core/infra/adapters/ExpressRouteAdapter'
import express from 'express'
import { makeCreateArticleControllerFactory } from '../factories/controllers/CreateArticleControllerFactory'
import { makeFindAllArticlesControllerFactory } from '../factories/controllers/FindAllArticlesControllerFactory'

const articleRouter = express.Router()

articleRouter.post('/import', adaptRoute(makeCreateArticleControllerFactory()))

articleRouter.get('/', adaptRoute(makeFindAllArticlesControllerFactory()))

export { articleRouter }