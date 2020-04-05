# frozen_string_literal: true

# @param {Integer[]} nums
# @return {Void} Do not return anything, modify nums in-place instead.
def move_zeroes(nums)
  j = 0

  nums.each_with_index do |num, i|
    next if num.zero?

    temp = nums[j]
    nums[j] = nums[i]
    nums[i] = temp
    j += 1
  end

  nums
end
