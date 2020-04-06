# @param {Integer[]} nums
# @return {Integer}
def max_sub_array(nums)
  lmax = 0
  gmax = nums.first

  nums.each do |num|
    lmax = [num, num + lmax].max
    gmax = [lmax, gmax].max
  end

  gmax
end
