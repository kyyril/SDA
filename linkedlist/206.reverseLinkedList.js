var reverseList = function (head) {
  let prev = null;
  let curr = head;

  while (curr !== null) {
    let nextTemp = curr.next;
    curr.next = prev;

    prev = curr;
    curr = nextTemp;
  }

  return prev;
};


// var reverseList = function(head) {
//     if (head === null || head.next === null) {
//         return head;
//     }
//     let p = reverseList(head.next);
//     head.next.next = head;
//     head.next = null;

//     return p;
// };