const diagonalDifference = require('./diagonalDifference');

describe('Diagonal Difference of a Matrix', () => {

  it('should return 2', () => {
    expect(diagonalDifference([
      [1, 2, 3],
      [4, 5, 6],
      [9, 8, 9]
    ])).toBe(2);
  });

  it('should return 15', () => {
    expect(diagonalDifference([
      [11, 2, 4],
      [4, 5, 6],
      [10, 8, -12]
    ])).toBe(15);
  });

  it('should return 64', () => {
    expect(diagonalDifference([
      [91, 2, 41],
      [2, 52, -31],
      [71, 13, -43]
    ])).toBe(64);
  });

});