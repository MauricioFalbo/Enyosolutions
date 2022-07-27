import { Controller } from "@core/infra/Controller";
import { KnexArticlesRepository } from "@modules/repositories/knex/KnexArticles.repositories";
import { FindAllArticles } from "@modules/useCase/article/FindAll/FindAllArticles";
import { FinAllArticlesController } from "@modules/useCase/article/FindAll/FindAllArticlesController";

export function makeFindAllArticlesControllerFactory(): Controller {
    const knexArticlesRepository = new KnexArticlesRepository() 
    const findAllArticles = new FindAllArticles(knexArticlesRepository)

    return new FinAllArticlesController(findAllArticles)
}