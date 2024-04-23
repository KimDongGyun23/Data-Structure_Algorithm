class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}

class Queue {
  constructor() {
    this.front = null;
    this.rear = null;
  }

  isEmpty() {
    return this.front == null && this.rear === null;
  }

  insert(data) {
    const newNode = new Node(data);
    if (this.isEmpty()) this.front = newNode;
    else this.rear.next = newNode;

    this.rear = newNode;
  }

  remove() {
    if (this.isEmpty()) return;
    this.front = this.front.next;

    // 노드가 하나였을 경우
    if (!this.front) this.rear = null;
  }

  peekFront() {
    if (this.isEmpty()) return;
    return this.front.data;
  }

  display() {
    if (this.isEmpty()) return;
    let current = this.front;

    while (current != this.rear) {
      console.log(current.data, " ");
      current = current.next;
    }
    console.log(current.data);
  }
}
