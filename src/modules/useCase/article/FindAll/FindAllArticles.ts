import { Articles } from "@modules/entity/articles";
import { IArticlesRepository } from "@modules/repositories/IArticles.repositories";
import { FindAllArticleResponse } from "./FindAllArticleResponse";

export class FindAllArticles {
    constructor(
        private articlesRepository: IArticlesRepository
    ) {}

    getTitleMoreVowels(title: string): string {
        const words: Array<string> = title.split(' ')
        let wordsWithMoreVowels = ''
        let numberVowels = 0
        const vowels = ['a', 'e', 'i', 'o', 'u', 'y']

        words.forEach(word => {
            const teste = word.split('').filter((letter) => {
                return vowels.includes(letter)
            })
            
            if( numberVowels < teste.length ) {
                numberVowels = teste.length
                wordsWithMoreVowels = word
            }

        })

        return wordsWithMoreVowels
    }

    async execute(): Promise<Array<FindAllArticleResponse>> {
        const result = await this.articlesRepository.findAll()
        const response: Array<FindAllArticleResponse> = []

        result.forEach(el => {
            response.push({
                ...el,
                wordWithMoreVowels: this.getTitleMoreVowels(el.title)
            })
        })
        
        return response
    }
}