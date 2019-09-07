class IndexMinHeap {

  constructor(k, nums) {
    this.maxNum = k
    this.heapContainer = []
    this.indexes = []
    this.reverse = []
  }

  size() {
    return this.indexes.length
  }

  getParentIndex(index) {
    return Math.floor((index - 1) / 2)
  }

  getChildIndex(index) {
    return index * 2 + 1
  }

  hasParent(index) {
    return this.getParentIndex(index) >= 0
  }

  hasChild(index) {
    return this.getChildIndex(index) < this.size()
  }

}