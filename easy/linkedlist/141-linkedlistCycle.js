var hasCycle = function (head) {
  for (let slow = head, fast = head; fast && fast.next; ) { // while fast.next is true
    
    slow = slow.next;
    fast = fast.next.next;

    if (slow === fast) return true;
  }
  return false;
};
