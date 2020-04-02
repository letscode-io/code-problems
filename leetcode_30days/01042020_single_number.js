var singleNumber = function(nums) {
  return nums.reduce((memo, num) => memo ^ num, 0);
};
