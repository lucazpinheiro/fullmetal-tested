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
    const currentUsers = {}
    for (let [id, user] of USERS) {
      currentUsers[id] = user
    }
    res.status(200).json({
      users: currentUsers
    })
    return
  }
  const { postCount } = req.query
  const matchingUsers = {}
  for (let [id, user] of USERS) {
    if (user.postCount === Number(postCount)) {
      matchingUsers[id] = user
    }
  }
  res.status(200).json({
    users: matchingUsers
  })
})
routes.get('/users/:id', (req, res) => {
  const userID = req.params.id
  const searchedUser = USERS.get(userID)
  res.status(200).json({
    id: userID,
    name: searchedUser.name,
    postCount: searchedUser.postCount
  })
})
routes.post('/users', (req, res) => {
  if (!req.body.name) {
    res.status(400).json({
      message: `missing 'name' property`
    })
  }
  const { name } = req.body
  USERS.set('111', {
    name,
    postCount: 0
  })
  const newUser = USERS.get('111')
  res.status(200).json({
    id: '111',
    name: newUser.name,
    postCount: newUser.postCount
  })
})
routes.put('/users/:id', (req, res) => {
  if (!Object.keys(req.body).length) {
    res.status(400).json({
      message: `data was not provided`
    })
  }
  const userID = req.params.id
  const updatedUser = req.body
  USERS.set(userID, {
    name: updatedUser.name,
    postCount: updatedUser.postCount
  })
  res.status(200).json({
    id: userID,
    name: USERS.get(userID).name,
    postCount: USERS.get(userID).postCount
  })
})
routes.delete('/users/:id', (req, res) => {
  const userID = req.params.id
  if (!USERS.has(userID)) {
    res.status(400).json({
      message: `user didn't exist`
    })
  }
  USERS.delete(userID)
  res.status(200).json({
    message: `user successfully deleted`,
    usersCount: USERS.size
  })
})

export default routes
