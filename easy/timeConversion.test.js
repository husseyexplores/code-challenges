const timeConversion = require('./timeConversion');

describe('12-hour time into 24-hour time conversion', () => {

  it('should convert 12:00:00AM into 00:00:00', () => {
    expect(timeConversion('12:00:00AM')).toBe('00:00:00');
  });

  it('should return 12:00:00PM into 12:00:00', () => {
    expect(timeConversion('12:00:00PM')).toBe('12:00:00');
  });

  it('should return 11:59:47PM into 23:59:47', () => {
    expect(timeConversion('11:59:47PM')).toBe('23:59:47');
  });

  it('should return 01:35:16PM into 13:35:16', () => {
    expect(timeConversion('01:35:16PM')).toBe('13:35:16');
  });

  it('should return 01:35:16AM into 01:35:16', () => {
    expect(timeConversion('01:35:16AM')).toBe('01:35:16');
  });

  it('should return 06:05:34AM into 06:05:34', () => {
    expect(timeConversion('06:05:34AM')).toBe('06:05:34');
  });

  it('should return 06:05:34PM into 18:05:34', () => {
    expect(timeConversion('06:05:34PM')).toBe('18:05:34');
  });

});