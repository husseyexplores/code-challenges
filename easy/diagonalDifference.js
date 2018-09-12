const diagonalDifference = arr => {

  /*
    [
      [1,2,3] , - 0
      [4,5,6] , - 1
      [9,8,9] , - 2
    ]

    1 => [0][0] 
    5 => [1][1]
    9 => [2][2]
    --
    3 => [0][arr.length - 1]
    5 => [1][arr.length - (1 +1)]
    9 => [2][arr.length - (1 +2)]
  */

  let ltr = 0;
  let rtl = 0;

  for (let i = 0; i < arr.length; i++) {
    ltr += arr[i][i];
    rtl += arr[i][arr.length - (i + 1)];
  }

  return Math.abs(ltr - rtl);
};

module.exports = diagonalDifference