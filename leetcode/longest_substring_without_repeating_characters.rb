# 3. Longest Substring Without Repeating Characters
# https://leetcode.com/problems/longest-substring-without-repeating-characters

def longest_substring(s)
  memo = ""

  s.each_char do |char|
    break if memo.include?(char)

    memo.concat(char)
  end

  memo
end

def length_of_longest_substring(s)
  longest_size = 0

  return s.size if s.size < 2

  while longest_size < s.size
    substring = longest_substring(s)

    longest_size = substring.size if substring.size > longest_size

    break if longest_size >= s.size

    repetitive = s[substring.size]
    repetitive_index = substring.index(repetitive)
    start_from = repetitive_index + 1

    s = s[start_from..-1]
  end

  longest_size
end
