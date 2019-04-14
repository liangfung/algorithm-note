 class Queue {
  constructor() {
    this.queue = []
  }

  enQueue(item) {
    this.queue.push(item)
  }

  deQueue() {
    return this.queue.shift()
  }

  getHeader() {
    return this.queue[0]
  }

  getLength() {
    return this.queue.length
  }

  isEmpty() {
    return this.queue.length === 0
  }

}

module.exports = Queue