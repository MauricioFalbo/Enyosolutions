import axios from 'axios'
import xml2js from 'xml2js'
import { IArticlesRepository } from "@modules/repositories/IArticles.repositories";
import { RequestCreateArticle } from "./CreateArticle.DTO";
import { Articles } from '@modules/entity/articles';
import { IImportsRepository } from '@modules/repositories/IImports.repositories';
import { Imports } from '@modules/entity/imports';

export class CreateArticle {
    constructor(
        private articlesRepository: IArticlesRepository,
        private importsRepository: IImportsRepository
    ) {}

    async execute(data: RequestCreateArticle): Promise<void> {
        const { siteRssUrl } = data
        const articles = []
        let resultRss = ''

        const instance = await axios.get(siteRssUrl, {
            headers: {"X-Requested-With": "XMLHttpRequest"}
        });

        xml2js.parseString(instance.data, async (err, result) => {
            if(err) {
                throw err;
            }

            const items = result?.rss?.channel[0].item
            
            resultRss = result

            items.forEach(item => {
                articles.push(
                    Articles.create({
                        importDate: new Date(),
                        title: item.title[0],
                        description: encodeURI(item.description[0]),
                        externalId: item.guid[0]._ || item.guid[0],
                        publicationDate: new Date(item.pubDate[0]),
                        link: item.link[0],
                        mainPicture: item['media:content'][0].$.url
                    })
                )
            });
        })

        await this.importsRepository.create(
            Imports.create({
                importDate: new Date(),
                rawContent: encodeURI(resultRss)
            })
        )
        await this.articlesRepository.create(articles)
    }
}
