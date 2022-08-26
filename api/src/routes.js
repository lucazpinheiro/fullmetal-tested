import Router from 'express'
import USERS from '../mock/users.js'

const routes = Router()

routes.get('/status', (req, res) => {
  res.status(200).json({
    status: 'server is up!'
  })
})
routes.get('/users', (req, res) => {
  if (!Object.keys(req.query).length) {
    res.status(200).json({
      users: [ ...USERS ]
    })
    return
  }
  const { postCount } = req.query
  res.status(200).json({
    users: USERS.filter(user => user.postCount === Number(postCount))
  })
})
routes.get('/users/:id', (req, res) => {
  const userID = req.params.id
  const [userByID] = USERS.filter(user => user.id === userID)
  res.status(200).json({
    searchedUser: {
      ...userByID
    }
  })
})
routes.post('/users', (req, res) => {
  if (!req.body.name) {
    res.status(400).json({
      message: `missing 'name' property`
    })
  }
  const { name } = req.body
  const newUser = {
    id: '111',
    name,
    postCount: 0
  }
  USERS.push(newUser)
  res.status(200).json(newUser)
})

export default routes
