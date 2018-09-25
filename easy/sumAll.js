const sumAll = function(a, b) {
  if (typeof a !== 'number' || typeof b !== 'number' || a < 0 || b < 0 ) return 'ERROR';

  let smallerNum;
  let biggerNum;
  let result = 0;

  if (a < b) {
    smallerNum = a;
    biggerNum = b;
  } else if (a > b) {
    smallerNum = b;
    biggerNum = a;
  }

  for (let i = smallerNum; i <= biggerNum; i++) {
    result += i;
  }

  return result;
}

module.exports = sumAll
