import Router from 'express'

const routes = Router()

routes.get('/status', (req, res) => {
  res.status(200).json({
    status: 'server is up!'
  })
})

export default routes
