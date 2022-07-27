type ArticlesProps = {
    id?: number
    importDate?: Date
    externalId: string
    title: string
    description: string
    publicationDate: Date
    link: string
    mainPicture: string
}

export class Articles {
    id?: number
    importDate?: Date
    externalId: string
    title: string
    description: string
    publicationDate: Date
    link: string
    mainPicture: string

    private constructor(props: ArticlesProps) {
        this.id = props.id
        this.importDate = props.importDate
        this.externalId = props.externalId
        this.title = props.title
        this.description = props.description
        this.publicationDate = props.publicationDate
        this.link = props.link
        this.mainPicture = props.mainPicture
    }

    static create(props: ArticlesProps): Articles {
        return new Articles(props)
    }
}