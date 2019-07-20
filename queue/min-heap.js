class MinHeap {

  constructor(max, initialArr) {
    this.heap = Array.isArray(initialArr) ? initialArr : []
    this.max = max
    this.heapify()
  }

  getParentIndex(index) {
    return Math.floor((index - 1) / 2)
  }

  hasParent(index) {
    return this.getParentIndex(index) >= 0
  }

  getChildIndex(index) {
    return index * 2 + 1
  }

  hasChild(index) {
    return this.getChildIndex(index) < this.size()
  }

  inqueue(num) {
    // if (this.size() >= this.max) return

    this.heap.push(num)
    this.shiftUp(this.size() - 1)
  }

  shiftUp(index) {
    if (!this.hasParent(index)) return
    let parentIndex = this.getParentIndex(index)
    if (this.heap[index] < this.heap[parentIndex]) {
      this.swap(index, parentIndex)
      this.shiftUp(parentIndex)
    }
  }

  swap(index_1, index_2) {
    [this.heap[index_1], this.heap[index_2]] = [this.heap[index_2], this.heap[index_1]]
  }

  dequeue() {
    if (!this.size()) return null
    let result = this.heap.shift()
    if (this.size() > 1) {
      let lastItem = this.heap.pop()
      this.heap.unshift(lastItem)
    }

    this.shiftDown(0)

    return result
  }

  size() {
    return this.heap.length
  }

  shiftDown(index) {
    if (!this.hasChild(index)) return
    let childIndex = this.getChildIndex(index)
    if (childIndex + 1 < this.size() && this.heap[childIndex + 1] < this.heap[childIndex]) childIndex++
    if (this.heap[index] > this.heap[childIndex]) {
      this.swap(index, childIndex)
      this.shiftDown(childIndex)
    }
  }

  print() {
    console.log(this.heap)
  }

  peak() {
    return this.heap[0]
  }

  heapify() {
    if (!this.hasParent(this.size() - 1)) return
    
    var i = this.getParentIndex(this.size() - 1)
    while (i >= 0) {
      this.shiftDown(i)
      i--
    }
  }

}

let m = new MinHeap(10)
// let m = new MinHeap(10)
m.inqueue(5)
m.inqueue(7)
m.inqueue(8)
// m.inqueue(1)
// m.inqueue(30)
// m.inqueue(11)
// m.inqueue(6)
m.print()
m.dequeue()
m.print()


// let result = []
// while (m.size() > 0) {
//   result.push(m.dequeue())
// }
// console.log(result)

module.exports = MinHeap