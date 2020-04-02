/**
 * @param {number} n
 * @return {boolean}
 */
var getDigits = function(n) {
  var nums = [];
  while (n >= 1) {
      let rem = n % 10;
      nums.push(rem);
      n = (n - rem) / 10;
  }
  return nums;
}

var isHappy = function(n) {
  var seen = new Set();
  var newNum = n;
  while (true) {
    var result = getDigits(newNum).reduce((sum, num) => sum + Math.pow(num, 2), 0);

    if (seen.has(result)) return false;
    if (result === 1) return true;

    seen.add(result);
    newNum = result;
  }
};
