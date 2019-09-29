object Solution {
    def isPalindrome(x: Int): Boolean = {
      if (x < 0 || x % 10 == 0) return false
      if (x < 10) return true

      x == reverse(x, 0)
    }

    def reverse(number: Int, initial: Int): Int = {
      if (number == 0) return initial

      reverse(
        (number / 10), (initial * 10) + (number % 10)
      )
    }
}
