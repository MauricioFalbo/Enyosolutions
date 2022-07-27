import { Controller } from "@core/infra/Controller";
import { KnexArticlesRepository } from "@modules/repositories/knex/KnexArticles.repositories";
import { KnexImportsRepository } from "@modules/repositories/knex/KnexImports.repositories";
import { CreateArticle } from "@modules/useCase/article/Create/CreateArticle";
import { CreateArticleController } from "@modules/useCase/article/Create/CreateArticleController";

export function makeCreateArticleControllerFactory(): Controller {
    const knexArticlesRepository = new KnexArticlesRepository()
    const knexImportsRepository = new KnexImportsRepository()
    const createArticle = new CreateArticle(knexArticlesRepository, knexImportsRepository)

    return new CreateArticleController(createArticle)
}
