var detectCycle = function (head) {
  let slow = head,
    fast = head;
  while (fast && fast.next) {
    slow = slow.next;
    fast = fast.next.next;
    if (slow === fast) {
      slow = head; // go back
      while (slow !== fast) {
        //loop until meet again
        slow = slow.next; // go to cycle
        fast = fast.next; // loop on cycle
      } // imagine meet in 10 = slow & fast++ = meet 10
      return slow; // will meet in start cycle 
    }
  }
  return null;
};
