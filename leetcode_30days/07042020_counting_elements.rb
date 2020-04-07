# frozen_string_literal: true

# @param {Integer[]} arr
# @return {Integer}
def count_elements(arr)
  dic = arr.each_with_object({}) { |num, o| o[num] = true }

  arr.inject(0) do |memo, num|
    next memo unless dic[num.succ]

    memo + 1
  end
end
