import { Imports } from '@modules/entity/imports'

export interface IImportsRepository {
    create(imports: Imports): Promise<Imports>
}