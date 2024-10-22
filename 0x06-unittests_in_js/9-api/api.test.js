const request = require('request');
const { expect } = require('chai');

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

describe('cart page', () => {
  it('should return status code 200 when id is a number', () => new Promise((done) => {
    request('http://localhost:7865/cart/1', (error, response, body) => {
      expect(response.statusCode).to.equal(200);
      expect(body).to.equal('Payment methods for cart 1');
      done();
    });
  }));

  it('should return status code 404 when id is not a number', () => new Promise((done) => {
    request('http://localhost:7865/cart/abc', (error, response, body) => {
      expect(response.statusCode).to.equal(404);
      done();
    });
  }));
});
