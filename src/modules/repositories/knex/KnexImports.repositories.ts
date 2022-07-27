import { knexInstance } from '@infra/knex/client';
import { Imports } from "@modules/entity/imports";
import { IImportsRepository } from '../IImports.repositories';


export class KnexImportsRepository implements IImportsRepository{
    private tableName: string = 'imports'

    async create(imports: Imports): Promise<any> {
        return knexInstance<Imports>(this.tableName)
        .insert(imports)
    }
}
