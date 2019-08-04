class MaxHeap {

  constructor(k) {
    this.maxLen = k
    this.heapContainer = []
  }

  size() {
    return this.heapContainer.length
  }

  hasParent(index) {
    return this.getParentIndex(index) >= 0
  }

  getParentIndex(index) {
    return Math.floor((index - 1) / 2)
  }

  getChildIndex(index) {
    return Math.floor(index * 2 + 1)
  }

  hasChild(index) {
    return this.getChildIndex(index) < this.size()
  }

  leftChild(index) {
    let childIndex = this.getChildIndex(index)
    return this.heapContainer[childIndex]
  }

  rightChild(index) {
    let childIndex = this.getChildIndex(index)
    return childIndex + 1 < this.size() ? this.heapContainer[childIndex + 1] : undefined
  }

  swap(index_1, index_2) {
    [this.heapContainer[index_1], this.heapContainer[index_2]] = [this.heapContainer[index_2], this.heapContainer[index_1]]
  }

  shiftDown(index) {
    if (!this.hasChild(index)) return
    let childIndex = this.getChildIndex(index)
    if (childIndex + 1 < this.size() && this.heapContainer[childIndex] < this.heapContainer[childIndex + 1]) childIndex++
    if (this.heapContainer[index] < this.heapContainer[childIndex]) {
      this.swap(index, childIndex)
      this.shiftDown(childIndex)
    }
  }

  shiftUp(index) {
    if (!this.hasParent(index)) return
    let parentIndex = this.getParentIndex(index)
    if (this.heapContainer[index] > this.heapContainer[parentIndex]) {
      this.swap(index, parentIndex)
      this.shiftUp(parentIndex)
    }
  }

  peak() {
    return this.heapContainer[0]
  }

  add(num) {
    this.heapContainer.push(num)
    this.shiftUp(this.size() - 1)
  }

  dequeue() {
    let result = this.heapContainer[0]
    if (this.size() > 1) {
      this.heapContainer[0] = this.heapContainer.pop()
      this.shiftDown(0)
    }
    return result
  }

  // findIndex(num) {
  //   let index = 0
  //   if (num === this.heapContainer[index]) return index
  //   let left = this.leftChild(index)
  //   let right = this.rightChild(index)
  //   if(this.heapContainer[index] > num) {

  //   }
  // }

  remove(index) {
    // find num

  }

}