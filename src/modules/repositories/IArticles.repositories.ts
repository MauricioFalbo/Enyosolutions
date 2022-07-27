import { Articles } from "@modules/entity/articles";


export interface IArticlesRepository {
    create(articles: Array<Articles>): Promise<any>
    findAll(): Promise<Array<Articles>>
}