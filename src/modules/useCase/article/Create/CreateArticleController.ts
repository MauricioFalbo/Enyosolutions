import { Controller } from '@core/infra/Controller'
import { HttpResponse, fail, created } from '@core/infra/HttpResponse'

import { CreateArticle } from './CreateArticle'
import { RequestCreateArticle } from './CreateArticle.DTO'

export class CreateArticleController implements Controller {
  constructor(private createArticle: CreateArticle) {}

  async handle(query: RequestCreateArticle): Promise<HttpResponse> {
    try {
      const result = await this.createArticle.execute(query)

      return created({ result })
    } catch (err) {
      return fail(err)
    }
  }
}
