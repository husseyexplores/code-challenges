const caesar = require('./caesarCipher')

describe('caesar', function () {
  it('works with single letters', function () {
    expect(caesar('A', 1)).toBe('B');
  });
  it('works with words', function () {
    expect(caesar('Aaa', 1)).toBe('Bbb');
  });
  it('works with phrases', function () {
    expect(caesar('Hello, World!', 5)).toBe('Mjqqt, Btwqi!');
  });
  it('works with negative shift', function () {
    expect(caesar('Mjqqt, Btwqi!', -5)).toBe('Hello, World!');
  });
  it('wraps uppercase', function () {
    expect(caesar('Z', 1)).toBe('A');
  });
  it('wraps lowercase', function () {
    expect(caesar('z', 1)).toBe('a');
  });
  it('ignores numbers in a string', function () {
    expect(caesar('Hello11, World!123', 5)).toBe('Mjqqt11, Btwqi!123');
  });
  it('works with large shift factors', function () {
    expect(caesar('Hello, World!', 75)).toBe('Ebiil, Tloia!');
  });
  it('works with large negative shift factors', function () {
    expect(caesar('Hello, World!', -29)).toBe('Ebiil, Tloia!');
  });
});