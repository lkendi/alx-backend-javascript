const request = require('request');
const { expect } = require('chai');
const app = require('./api');

describe('index page', () => {
  it('should return status code 200', () => new Promise((done) => {
    request('http://localhost:7865', (error, response, body) => {
      expect(response.statusCode).to.equal(200);
      done();
    });
  }));

  it('should return the correct message', () => new Promise((done) => {
    request('http://localhost:7865', (error, response, body) => {
      expect(body).to.equal('Welcome to the payment system');
      done();
    });
  }));
});
