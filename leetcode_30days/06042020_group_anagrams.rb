# frozen_string_literal: true

def group_anagrams(strs)
  strs.group_by { |word| word.chars.sort }.values
end
