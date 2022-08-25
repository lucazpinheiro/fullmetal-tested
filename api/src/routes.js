import Router from 'express'
import mock from './mockedData.js'

const routes = Router()

routes.get('/status', (req, res) => {
  res.status(200).json({
    status: 'server is up!'
  })
})
routes.get('/users', (req, res) => {
  res.status(200).json({
    users: [ ...mock.USERS ]
  })
})
routes.get('/users/:id', (req, res) => {
  const userID = req.params.id
  const [userByID] = mock.USERS.filter(user => user.id === userID)
  res.status(200).json({
    searchedUser: {
      ...userByID
    }
  })
})

export default routes
