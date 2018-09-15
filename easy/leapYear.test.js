const learYear = require('./leapYear');

describe('A leap year', () => {
  test('year not divisible by 4: common year', () => {
    expect(learYear(2015)).toBeFalsy();
  });

  xtest('year divisible by 4, not divisible by 100: leap year', () => {
    expect(learYear(2016)).toBeTruthy();
  });

  xtest('year divisible by 100, not divisible by 400: common year', () => {
    expect(learYear(2100)).toBeFalsy();
  });

  xtest('year divisible by 400: leap year', () => {
    expect(learYear(2000)).toBeTruthy();
  });
});