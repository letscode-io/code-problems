var countElements = function(arr) {
  let numbers = arr.reduce((acc, num) => {
    acc[num] = true;
    return acc;
  }, {});

  return arr.reduce((count, num) => {
    if (numbers[num + 1]) {
        count += 1;
    }

    return count;
  }, 0);
};

var countElements = function(arr) {
  return arr.reduce((count, num) => {
    if (arr.indexOf(num + 1) > -1) {
        count += 1;
    }

    return count;
  }, 0);
};
