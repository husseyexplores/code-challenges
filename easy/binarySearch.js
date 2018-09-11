const binarySearch = (arr, val) => {
  let start = 0;
  let stop = arr.length - 1;
  let middle = Math.floor((start + stop) / 2);

  while (arr[middle] !== val && start < stop) {
    if (val < arr[middle]) {
      stop = middle - 1;
    } else {
      start = middle + 1;
    }

    middle = Math.floor((start + stop) / 2);
  }

  return (result = arr[middle] === val ? middle : -1);
};

module.exports = binarySearch;
