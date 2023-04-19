import { Router } from 'express'

const v1Router = Router()

v1Router.get('/test', (req, res, next) => res.send('test'))

export default v1Router