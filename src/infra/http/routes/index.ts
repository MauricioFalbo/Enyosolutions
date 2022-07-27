import { Router } from 'express'
import { articleRouter } from './article.routes'
import { statusRouter } from './status.routes'


const router = Router()

router.use('/status', statusRouter)
router.use('/articles', articleRouter)

export { router }
