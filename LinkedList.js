function LinkedList() {
    this.head = null;
    this.count = 0;
    this.tail = null;
}
function Node(value) {
    this.value = value;
    this.next = null;
    this.previous = null;
}

LinkedList.prototype.add = function (value) {
    const newNode = new Node(value);
    if (!this.head) this.head = newNode;
    else {
        newNode.previous = this.tail;
        this.tail.next = newNode;
    }
    this.tail = newNode;
    this.count++
}