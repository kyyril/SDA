var removeNthFromEnd = function (head, n) {
  let fast = head;
  let slow = head;

  // fast go n steps
  for (let i = 0; i < n; i++) {
    fast = fast.next;
  }

  // edge case delete head
  if (!fast) {
    return head.next;
  }

  // run together
  while (fast.next) {
    fast = fast.next;
    slow = slow.next;
  }

  // delete node
  slow.next = slow.next.next;

  return head;
};
