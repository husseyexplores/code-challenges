/*

Write a function that simply repeats the string a given number of times:

```javascript
repeatString('hey', 3) // returns 'heyheyhey'
```
*/
const repeatString = (str, times) => {
  if (times < 0) return 'ERROR';
  if (times === 0) return '';

  let newStr = '';
  for (let i = 0; i < times; i++) {
    newStr += str;
  }
  return newStr;
};

module.exports = repeatString;