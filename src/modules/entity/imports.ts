type ImportsProps = {
    id?: number
    importDate: Date
    rawContent: string
}

export class Imports {
    id?: number
    importDate: Date
    rawContent: string

    private constructor(props: ImportsProps) {
        this.id = props.id
        this.importDate = props.importDate
        this.rawContent = props.rawContent
    }

    static create(props: ImportsProps): Imports {
        return new Imports(props)
    }
}