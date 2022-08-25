import app from '../src/app.js'
import request from 'supertest'

describe('GET endpoints', () => {
  describe('GET /users', () => {
    it('Should respond with an array of users', async () => {
      const EXPECTED_DATA = [
        {
          id: '10',
          name: 'aaa',
          postCount: 5
        },
        {
          id: '80',
          name: 'bbb',
          postCount: 19
        },
        {
          id: '34',
          name: 'ccc',
          postCount: 5
        }
      ]

      const response = await request(app).get('/users')
      expect(response.statusCode).toBe(200)
      expect(response.headers['content-type']).toMatch(/json/)
      expect(response.body.users).toEqual(EXPECTED_DATA)
    })

    it('Should respond with a corresponding user', async () => {

      const EXPECTED_DATA = {
        id: '10',
        name: 'aaa',
        postCount: 5
      }

      const response = await request(app).get('/users/10')
      expect(response.statusCode).toBe(200)
      expect(response.headers['content-type']).toMatch(/json/)
      expect(response.body.searchedUser).toEqual(EXPECTED_DATA)
    })

    it('Should accept query parameters', async () => {

      const EXPECTED_DATA = [{
          id: '10',
          name: 'aaa',
          postCount: 5
        },
        {
          id: '34',
          name: 'ccc',
          postCount: 5
        }
      ]

      const response = await request(app).get('/users?postCount=5')
      expect(response.statusCode).toBe(200)
      expect(response.headers['content-type']).toMatch(/json/)
      expect(response.body.searchedUser).toEqual(EXPECTED_DATA)
    })
  })
})