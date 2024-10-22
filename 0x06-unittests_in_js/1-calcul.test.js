const assert = require('assert');
const calculateNumber = require('./1-calcul');

describe('calculateNumber', () => {
  it("should return 8 when parameters are 'SUM', 3 and 5", () => {
    assert.strictEqual(calculateNumber('SUM', 3, 5), 8);
  });
  it("should return 4 when parameters are 'SUM', 1 and 2.6", () => {
    assert.strictEqual(calculateNumber('SUM', 1, 2.6), 4);
  });
  it("should return 8 when parameters are 'SUM', 3.3 and 4.7", () => {
    assert.strictEqual(calculateNumber('SUM', 3.3, 4.7), 8);
  });
  it("should return -8 when parameters are 'SUM', -3 and -5", () => {
    assert.strictEqual(calculateNumber('SUM', -3, -5), -8);
  });
  it("should return -4 when parameters are 'SUM', -1 and -2.6", () => {
    assert.strictEqual(calculateNumber('SUM', -1, -2.6), -4);
  });
  it("should return -8 when parameters are 'SUM', -3.3 and -4.7", () => {
    assert.strictEqual(calculateNumber('SUM', -3.3, -4.7), -8);
  });
  it("should return 0 when parameters are 'SUM', 0 and 0", () => {
    assert.strictEqual(calculateNumber('SUM', 0, 0), 0);
  });

  describe('calculateNumber', () => {
    it("should return -2 when parameters are 'SUBTRACT', 3 and 5", () => {
      assert.strictEqual(calculateNumber('SUBTRACT', 3, 5), -2);
    });
    it("should return 7 when parameters are 'SUBTRACT', 10 and 2.6", () => {
      assert.strictEqual(calculateNumber('SUBTRACT', 10, 2.6), 7);
    });
    it("should return 9 when parameters are 'SUBTRACT', 13.3 and 4.07", () => {
      assert.strictEqual(calculateNumber('SUBTRACT', 13.3, 4.07), 9);
    });
    it("should return 2 when parameters are 'SUBTRACT', -3 and -5", () => {
      assert.strictEqual(calculateNumber('SUBTRACT', -3, -5), 2);
    });
    it("should return 2 when parameters are 'SUBTRACT', -1 and -2.6", () => {
      assert.strictEqual(calculateNumber('SUBTRACT', -1, -2.6), 2);
    });
    it("should return 2 when parameters are 'SUBTRACT', -3.3 and -4.7", () => {
      assert.strictEqual(calculateNumber('SUBTRACT', -3.3, -4.7), 2);
    });
    it("should return 0 when parameters are 'SUBTRACT', 0 and 0", () => {
      assert.strictEqual(calculateNumber('SUBTRACT', 0, 0), 0);
    });
  });

  describe('calculateNumber', () => {
    it("should return 2 when parameters are 'DIVIDE', 10 and 5", () => {
      assert.strictEqual(calculateNumber('DIVIDE', 10, 5), 2);
    });
    it("should return 0.5 when parameters are 'DIVIDE', 5 and 10", () => {
      assert.strictEqual(calculateNumber('DIVIDE', 5, 10), 0.5);
    });
    it("should return 1 when parameters are 'DIVIDE', 10 and 10", () => {
      assert.strictEqual(calculateNumber('DIVIDE', 10, 10), 1);
    });
    it("should return 'Error' when parameters are 'DIVIDE', 10 and 0", () => {
      assert.strictEqual(calculateNumber('DIVIDE', 10, 0), 'Error');
    });
    it("should return 0 when parameters are 'DIVIDE', 0 and 10", () => {
      assert.strictEqual(calculateNumber('DIVIDE', 0, 10), 0);
    });
    it("should return 1 when parameters are 'DIVIDE', 0.5 and 1", () => {
      assert.strictEqual(calculateNumber('DIVIDE', 0.5, 1), 1);
    });
    it("should return 'Error' when parameters are 'DIVIDE', 0 and 0", () => {
      assert.strictEqual(calculateNumber('DIVIDE', 0, 0), 'Error');
    });
    it("should return 0.25 when parameters are 'DIVIDE', 1 and 3.5", () => {
      assert.strictEqual(calculateNumber('DIVIDE', 1, 3.5), 0.25);
    });
  });
});
