import { knexInstance } from '@infra/knex/client';
import { Articles } from "@modules/entity/articles";
import { IArticlesRepository } from "../IArticles.repositories";

export class KnexArticlesRepository implements IArticlesRepository {
    private tableName: string = 'articles'

    async create(articles: Array<Articles>): Promise<any> {
        return knexInstance<Articles>(this.tableName)
        .insert(articles)
        .onConflict('externalId')
        .merge(['importDate', 'title', 'description', 'publicationDate', 'link', 'mainPicture'])
    }
    findAll(): Promise<Articles[]> {
        return knexInstance.select('*').from<Articles>(this.tableName)
    }
    
}