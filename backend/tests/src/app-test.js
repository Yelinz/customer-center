import app from '../../src/app'

describe('GET /api', () => {
  it('Responds with status 200', async () => {
    let res = await request(app).get('/api')

    expect(res).to.have.status(401)
    expect(res).to.be.json
  })
})
