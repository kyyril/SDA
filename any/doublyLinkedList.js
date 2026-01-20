class Node {
  constructor(value) {
    this.value = value;
    this.prev = null;
    this.next = null;
  }
}

class DoublyLinkedList {
  constructor(value) {
    let newNode = new Node(value);
    this.head = newNode;
    this.tail = this.head;
    this.length = 1;
  }

  push(value) {
    let newNode = new Node(value);

    if (this.length == 0) {
      this.head = null;
      this.tail = null;
    }

    this.tail.next = newNode;
    newNode.prev = this.tail;
    this.tail = newNode;

    this.length++;
    return this;
  }

  pop() {
    if (!this.head) {
      return null;
    }
    let temp = this.tail;
    this.tail = this.tail.prev;
    this.tail.next = null;
    temp.prev = null;
    this.length--;
  }

  unshift(value) {
    let newNode = new Node(value);
    if (this.length === 0) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      newNode.next = this.head;
      this.head.prev = newNode;
      this.head = newNode;
    }
    this.length++;
    return this;
  }

  shift() {
    if (this.length === 0) return undefined;

    let temp = this.head;
    if (this.length === 1) {
      this.head = null;
      this.tail = null;
    } else {
      this.head = this.head.next;
      this.head.prev = null;
      temp.next = null;
    }
    this.length--;
    return temp;
  }

  reverse() {
    if (this.length === 1) return this;

    let curr = this.head;
    let temp = null;

    while (curr != null) {
      temp = curr.prev;
      curr.prev = curr.next;
      curr.next = temp;

      curr = curr.prev;
    }

    temp = this.head;
    this.head = this.tail;
    this.tail = temp;

    return this;
  }
}

const myDoubleLinkedList = new DoublyLinkedList(10);
myDoubleLinkedList.push(15);
myDoubleLinkedList.push(20);
myDoubleLinkedList.reverse();
console.log(myDoubleLinkedList);
