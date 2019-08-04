/**
 * 索引最大堆
 */
class IndexMaxHeap {

  constructor(k) {
    this.maxLen = k
    // 数据容器
    this.heapContainer = []
    // 数据索引
    this.indexs = []
    // 反向索引，存储数据索引在indexs中的位置（索引）
    this.rev = []
  }

  size() {
    return this.indexs.length
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
    return this.heapContainer[this.indexs[childIndex]]
  }

  rightChild(index) {
    let childIndex = this.getChildIndex(index)
    return childIndex + 1 < this.size() ? this.heapContainer[this.indexs[childIndex + 1]] : undefined
  }

  swap(index_1, index_2) {
    [this.indexs[index_1], this.indexs[index_2]] = [this.indexs[index_2], this.indexs[index_1]]


  }

  shiftDown(index) {
    if (!this.hasChild(index)) return
    let childIndex = this.getChildIndex(index)
    if (childIndex + 1 < this.size() && this.heapContainer[this.indexs[childIndex]] < this.heapContainer[this.indexs[childIndex + 1]]) childIndex++
    if (this.heapContainer[this.indexs[index]] < this.heapContainer[this.indexs[childIndex]]) {
      this.swap(index, childIndex)
      this.shiftDown(childIndex)
    }
  }

  shiftUp(index) {
    if (!this.hasParent(index)) return
    let parentIndex = this.getParentIndex(index)
    if (this.heapContainer[this.indexs[index]] > this.heapContainer[this.indexs[parentIndex]]) {
      this.swap(index, parentIndex)
      this.shiftUp(parentIndex)
    }
  }

  peak() {
    return this.heapContainer[this.indexs[0]]
  }

  add(item) {
    let index = this.size()  // 新加上的元素
    this.heapContainer.push(item)
    this.indexs.push(index)
    this.shiftUp(index)
  }

  dequeue() {
    let result = this.heapContainer[this.indexs[0]]
    if (this.size() > 1) {
      this.indexs[0] = this.indexs.pop()
      this.shiftDown(0)
    } else {
      this.indexs = []
    }
    return result
  }

  print() {
    for(let index of this.indexs) {
      console.log(this.heapContainer[index])
    }
  }

  remove(index) {
    let item = this.heapContainer[index]
    let itemIndex = -1
    let result
    // 用了for循环，复杂度为 O(n)
    for(let i = 0; i < this.indexs.length; i++) {
      if(this.indexs[i] === index) {
        itemIndex = i
        break
      }
    }
    if(itemIndex > -1 && itemIndex !== this.size() - 1) {
      let lastIndexItem = this.indexs.pop()
      // 把最后一个塞进去，up and down
      this.indexs[itemIndex] = lastIndexItem
      this.shiftDown(itemIndex)
      this.shiftUp(itemIndex)
      result = item
    }

    return result
  }
  
}

let a = new IndexMaxHeap(10)
a.add(1)
a.add(50)
a.add(5)
a.add(90)
a.add(89)
a.add(32)
a.add(33)
a.add(4)

a.remove(7)
a.remove(1)
a.print()
// while(a.size() > 0) {
//   console.log(a.dequeue())
// }