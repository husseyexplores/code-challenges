const isPalindrome = require('./palindrome');

describe('Palindromes', function () {
  it('works with single words', function () {
    expect(isPalindrome('racecar')).toEqual(true);
  });
  it('works with punctuation', function () {
    expect(isPalindrome('Racecar!')).toEqual(true);
  });
  it('works with multiple words', function () {
    expect(isPalindrome('A car, a man, a maraca.')).toEqual(true);
  });
  it('works with multiple words', function () {
    expect(isPalindrome('Animal loots foliated detail of stool lamina.')).toEqual(true);
  });
  it('doesn\'t just always return true', function () {
    expect(isPalindrome('ZZZZ car, a man, a maraca.')).toEqual(false);
  });

});