const supertest = require('supertest');

const app = require('../app');

// Start testing
describe('app.js - GET /', () => {
  it('should respond with a message', async () => {
    const response = await supertest(app)
      .get('/')
      .expect('Content-Type', /json/)
      .expect(200);

    expect(response.body.message).toEqual('Hello World!');
  });
});
