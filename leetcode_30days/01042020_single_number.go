func singleNumber(nums []int) int {
  memo := 0
  for _, num := range nums {
    memo = memo ^ num
  }

  return memo
}
