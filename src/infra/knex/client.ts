import { knex } from 'knex'
import knexStringcase from 'knex-stringcase'
import { attachOnDuplicateUpdate } from 'knex-on-duplicate-update'


import config from './knexfile'

const configFromKnexReadme = knexStringcase(config[process.env.NODE_ENV])

attachOnDuplicateUpdate();

export const knexInstance = knex(configFromKnexReadme)
