/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function(nums) {
  var lmax = 0;
  var gmax = nums[0];

  for (var i = 0; i < nums.length; i++) {
    lmax = Math.max(nums[i], nums[i] + lmax);
    gmax = Math.max(lmax, gmax);
  }

  return gmax;
};
