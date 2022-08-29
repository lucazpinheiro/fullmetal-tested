import app from '../src/app.js'
import request from 'supertest'

describe('GET endpoints', () => {
  describe('GET /status', () => {
    it('Should respond with json status message', async () => {
      const response = await request(app).get('/status')
      expect(response.statusCode).toBe(200)
      expect(response.headers['content-type']).toMatch(/json/)
      expect(response.body).toEqual({ status: 'server is up!' })
    })
  })

  describe('GET /users', () => {
    it('Should respond with an object containing all users', async () => {
      const EXPECTED_DATA = {
          '10': {
            name: 'aaa',
            postCount: 5
          },
          '80': {
            name: 'bbb',
            postCount: 19
          },
          '34': {
            name: 'ccc',
            postCount: 5
          }
      }

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
      expect(response.body).toEqual(EXPECTED_DATA)
    })

    it('Should accept query parameters', async () => {

      const EXPECTED_DATA = {
        '10': {
          name: 'aaa',
          postCount: 5
        },
        '34': {
          name: 'ccc',
          postCount: 5
        }
      }

      const response = await request(app).get('/users?postCount=5')
      expect(response.statusCode).toBe(200)
      expect(response.headers['content-type']).toMatch(/json/)
      expect(response.body.users).toEqual(EXPECTED_DATA)
    })
  })
})