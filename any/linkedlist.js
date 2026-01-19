class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class LinkedList {
  constructor(value) {
    this.head = new Node(value);
    this.tail = this.head;
    this.length = 1;
  }

  push(value) {
    const newNode = new Node(value);

    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.tail.next = newNode;
      this.tail = newNode;
    }
    this.length++;
    return this;
  }

  pop() {
    if (!this.head) return undefined;

    let temp = this.head;
    let prev = this.head;

    while (temp.next !== null) {
      prev = temp;
      temp = temp.next;
    }

    this.tail = prev;
    this.tail.next = null;
    this.length--;

    if (this.length == 0) {
      this.head = null;
      this.tail = null;
    }

    return temp;
  }

  shift() {
    if (!this.head) return undefined;

    let temp = this.head;

    this.head = this.head.next;

    temp.next = null;
    this.length--;

    if (this.length === 0) {
      this.tail = null;
    }

    return temp;
  }

  unshift(value) {
    const newNode = new Node(value);

    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
      this.next = null;
    }
    newNode.next = this.head; // add old head to next newnode
    this.head = newNode;
    this.length++;
    return this;
  }

  get(index) {
    let temp = this.head;
    let counter = 0;
    while (temp) {
      if (counter == index) {
        return temp;
      }
      counter++;
      temp = temp.next;
    }

    return null;
  }

  set(index, value) {
    let temp = this.get(index);

    if (temp) {
      temp.value = value;
      return temp;
    }
    return null;
  }

  insert(index, value) {
    if (index == 0) return this.unshift(value);
    if (index == this.length) return this.push(value);

    let newNode = new Node(value);
    let prevNode = this.get(index - 1);

    newNode.next = prevNode.next;
    prevNode.next = newNode;

    this.length++;
    return true;
  }

  clear() {
    this.head = null;
  }
}

const mylinkedList = new LinkedList(10);

mylinkedList.push(20);
mylinkedList.insert(1, 15);
console.log(mylinkedList);
// console.log(mylinkedList);
// mylinkedList.pop();
// console.log(mylinkedList);
// mylinkedList.unshift(5);

// console.log(mylinkedList.set(0, 5));
