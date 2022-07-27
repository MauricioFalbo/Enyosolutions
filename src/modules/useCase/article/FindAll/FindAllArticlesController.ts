import { Controller } from "@core/infra/Controller"
import { HttpResponse, ok } from "@core/infra/HttpResponse"
import { FindAllArticles } from "./FindAllArticles"

export class FinAllArticlesController implements Controller {
    constructor(private createArticle: FindAllArticles) {}
  
    async handle(): Promise<HttpResponse> {
      try {
        const result = await this.createArticle.execute()
  
        return ok({ result })
      } catch (err) {
        return fail(err)
      }
    }
  }
  