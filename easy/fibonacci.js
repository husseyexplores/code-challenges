/*
# Exercise XX - fibonacci

Create a function that returns a specific member of the fibonacci sequence:

> a series of numbers in which each number ( Fibonacci number ) is the sum of the two preceding numbers. The simplest is the series 1, 1, 2, 3, 5, 8, etc.

```javascript
fibonacci(4) // returns the 4th member of the series: 3  (1, 1, 2, 3)
fibonacci(6) // returns 8
```
*/

const fibonacci = n => {
  let preNum = 0;
  let currNum = 1;
  let result = 0;

  for (let i = 0; i <= i; i++) {
    result += preNum + currNum;
    preNum = currNum;
    currNum = result;
  }

  return result;
};

module.exports = fibonacci;