const assert = require('assert');
const calculateNumber = require('./0-calcul');

describe('calculateNumber', () => {
  it('should return 8 when parameters are 3 and 5', () => {
    assert.strictEqual(calculateNumber(3, 5), 8);
  });
  it('should return 4 when parameters are 1 and 2.6', () => {
    assert.strictEqual(calculateNumber(1, 2.6), 4);
  });
  it('should return 8 when parameters are 3.3 and 4.7', () => {
    assert.strictEqual(calculateNumber(3.3, 4.7), 8);
  });
  it('should return -8 when parameters are -3 and -5', () => {
    assert.strictEqual(calculateNumber(-3, -5), -8);
  });
  it('should return -4 when parameters are -1 and -2.6', () => {
    assert.strictEqual(calculateNumber(-1, -2.6), -4);
  });
  it('should return -8 when parameters are -3.3 and -4.7', () => {
    assert.strictEqual(calculateNumber(-3.3, -4.7), -8);
  });
  it('should return 0 when parameters are 0 and 0', () => {
    assert.strictEqual(calculateNumber(0, 0), 0);
  });
});
