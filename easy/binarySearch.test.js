const binarySearch = require('./binarySearch');

//describe('Binary Search Function', () => {

it('should return 8 as an index value', () => {
  expect(binarySearch([1, 2, 3, 4, 5, 6, 7, 8], 7)).toBe(6);
});

it('should return 3 as an index value', () => {
  expect(binarySearch([2, 4, 9, 26, 32, 45], 26)).toBe(3);
});

it('should return 4 as an index value', () => {
  expect(binarySearch([0, 0, 0, 0, 99], 99)).toBe(4);
});

it('should return -1, value not found', () => {
  expect(binarySearch([1, 2, 3, 4, 5, 6, 7, 8], 9)).toBe(-1);
});

it('should return -1, value not found', () => {
  expect(binarySearch([0, 0, 0, 0, 99], 121)).toBe(-1);
});

it('should return -1, value not found', () => {
  expect(binarySearch([2, 4, 9, 26, 32, 45], 46)).toBe(-1);
});

//});