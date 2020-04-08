# frozen_string_literal: true

def middle_node(head)
  slow = head
  fast = head.next

  while fast
    slow = slow.next
    fast = fast.next&.next
  end

  slow
end
