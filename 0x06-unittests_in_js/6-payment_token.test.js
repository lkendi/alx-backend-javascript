const { expect } = require('chai');
const getPaymentTokenFromAPI = require('./6-payment_token');

describe('getPaymentTokenFromAPI', () => {
  it('should return a successful response when success is true', () => new Promise((done) => {
    getPaymentTokenFromAPI(true)
      .then((response) => {
        expect(response).to.deep.equal({ data: 'Successful response from the API' });
        done();
      })
      .catch((error) => done(error));
  }));
  it('should reject with an error when success is false', () => new Promise((done) => {
    getPaymentTokenFromAPI(false)
      .then(() => {
        done(new Error('Expected method to reject.'));
      })
      .catch((error) => {
        expect(error).to.be.an('error');
        done();
      });
  }));
});
