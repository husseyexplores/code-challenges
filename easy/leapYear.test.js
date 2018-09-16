const learYear = require('./leapYear');

describe('Check Leap Years', () => {
  it('year not divisible by 4: common year', () => {
    expect(learYear(2015)).toBeFalsy();
  });

  it('year divisible by 4, not divisible by 100: leap year', () => {
    expect(learYear(2016)).toBeTruthy();
  });

  it('year divisible by 100, not divisible by 400: common year', () => {
    expect(learYear(2100)).toBeFalsy();
  });

  it('year divisible by 400: leap year', () => {
    expect(learYear(2000)).toBeTruthy();
  });
  it('works with non century years', function () {
    expect(learYear(1996)).toBeTruthy();
  });
  it('works with non century years', function () {
    expect(learYear(1997)).toBeFalsy();
  });
  it('works with ridiculously futuristic non century years', function () {
    expect(learYear(34992)).toBeTruthy();
  });
  it('works with century years', function () {
    expect(learYear(1900)).toBeFalsy()
  });
  it('works with century years', function () {
    expect(learYear(1600)).toBeTruthy();
  });
  it('works with century years', function () {
    expect(learYear(700)).toBeFalsy()
  });
});