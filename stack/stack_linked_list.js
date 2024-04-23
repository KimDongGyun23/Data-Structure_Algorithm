class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}

class Stack {
  constructor() {
    this.top = null;
  }

  isEmpty() {
    return this.top === null;
  }

  push(data) {
    const newNode = new Node(data);
    newNode.next = this.top;
    this.top = newNode;
  }

  pop() {
    if (this.isEmpty()) return;
    this.top = this.top.next;
  }

  peek() {
    if (this.isEmpty()) return null;
    return this.top.data;
  }

  display() {
    if (this.isEmpty()) return;
    let current = this.top;

    while (current.next) {
      console.log(current.data, " ");
      current = current.next;
    }
    console.log(current.data);
  }
}

const stack = new Stack();
stack.push(1);
stack.push(3);
stack.push(2);

stack.display();
