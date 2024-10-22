const { expect } = require('chai');
const calculateNumber = require('./2-calcul_chai');

describe('calculateNumber', () => {
  it("should return 8 when parameters are 'SUM', 3 and 5", () => {
    expect(calculateNumber('SUM', 3, 5)).to.equal(8);
  });
  it("should return 4 when parameters are 'SUM', 1 and 2.6", () => {
    expect(calculateNumber('SUM', 1, 2.6)).to.equal(4);
  });
  it("should return 8 when parameters are 'SUM', 3.3 and 4.7", () => {
    expect(calculateNumber('SUM', 3.3, 4.7)).to.equal(8);
  });
  it("should return -8 when parameters are 'SUM', -3 and -5", () => {
    expect(calculateNumber('SUM', -3, -5)).to.equal(-8);
  });
  it("should return -4 when parameters are 'SUM', -1 and -2.6", () => {
    expect(calculateNumber('SUM', -1, -2.6)).to.equal(-4);
  });
  it("should return -8 when parameters are 'SUM', -3.3 and -4.7", () => {
    expect(calculateNumber('SUM', -3.3, -4.7)).to.equal(-8);
  });
  it("should return 0 when parameters are 'SUM', 0 and 0", () => {
    expect(calculateNumber('SUM', 0, 0)).to.equal(0);
  });

  describe('calculateNumber', () => {
    it("should return -2 when parameters are 'SUBTRACT', 3 and 5", () => {
      expect(calculateNumber('SUBTRACT', 3, 5)).to.equal(-2);
    });
    it("should return 7 when parameters are 'SUBTRACT', 10 and 2.6", () => {
      expect(calculateNumber('SUBTRACT', 10, 2.6)).to.equal(7);
    });
    it("should return 9 when parameters are 'SUBTRACT', 13.3 and 4.07", () => {
      expect(calculateNumber('SUBTRACT', 13.3, 4.07)).to.equal(9);
    });
    it("should return 2 when parameters are 'SUBTRACT', -3 and -5", () => {
      expect(calculateNumber('SUBTRACT', -3, -5)).to.equal(2);
    });
    it("should return 2 when parameters are 'SUBTRACT', -1 and -2.6", () => {
      expect(calculateNumber('SUBTRACT', -1, -2.6)).to.equal(2);
    });
    it("should return 2 when parameters are 'SUBTRACT', -3.3 and -4.7", () => {
      expect(calculateNumber('SUBTRACT', -3.3, -4.7)).to.equal(2);
    });
    it("should return 0 when parameters are 'SUBTRACT', 0 and 0", () => {
      expect(calculateNumber('SUBTRACT', 0, 0)).to.equal(0);
    });
  });

  describe('calculateNumber', () => {
    it("should return 2 when parameters are 'DIVIDE', 10 and 5", () => {
      expect(calculateNumber('DIVIDE', 10, 5)).to.equal(2);
    });
    it("should return 0.5 when parameters are 'DIVIDE', 5 and 10", () => {
      expect(calculateNumber('DIVIDE', 5, 10)).to.equal(0.5);
    });
    it("should return 1 when parameters are 'DIVIDE', 10 and 10", () => {
      expect(calculateNumber('DIVIDE', 10, 10)).to.equal(1);
    });
    it("should return 'Error' when parameters are 'DIVIDE', 10 and 0", () => {
      expect(calculateNumber('DIVIDE', 10, 0)).to.equal('Error');
    });
    it("should return 0 when parameters are 'DIVIDE', 0 and 10", () => {
      expect(calculateNumber('DIVIDE', 0, 10)).to.equal(0);
    });
    it("should return 1 when parameters are 'DIVIDE', 0.5 and 1", () => {
      expect(calculateNumber('DIVIDE', 0.5, 1)).to.equal(1);
    });
    it("should return 'Error' when parameters are 'DIVIDE', 0 and 0", () => {
      expect(calculateNumber('DIVIDE', 0, 0)).to.equal('Error');
    });
    it("should return 0.25 when parameters are 'DIVIDE', 1 and 3.5", () => {
      expect(calculateNumber('DIVIDE', 1, 3.5)).to.equal(0.25);
    });
  });
});
