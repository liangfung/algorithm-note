/**
 * 索引最大堆
 * 
 */
class IndexMaxHeap {

  constructor(k) {
    this.maxLen = k
    // 数据容器
    this.heapContainer = []

    // 数据索引，真正操作的堆，（不操作数据源，操作index，性能消耗小）
    this.indexs = []

    // 反向索引 reverse，存储数据索引在indexs中的位置（索引）
    this.rev = Array.from(this.maxLen).fill(-1)

    // 注意规律： indexs[i] = j;  rev[j] = i
    // --->  rev[indexs[i]] = i
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
    // indexs中元素互换位置
    [this.indexs[index_1], this.indexs[index_2]] = [this.indexs[index_2], this.indexs[index_1]]

    // 相应的更改rev中的值
    this.rev[this.indexs[index_1]] = index_1
    this.rev[this.indexs[index_2]] = index_2
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
    // 怎么更改rev的值呢
    this.rev.push(index)
    this.shiftUp(index)
  }

  dequeue() {
    let result = this.heapContainer[this.indexs[0]]
    if (this.size() > 1) {
      let maxIndex = this.indexs[0]
      let i = this.indexs[0] = this.indexs.pop()
      this.rev[maxIndex] = -1
      this.rev[i] = 0
      this.shiftDown(0)
    } else {
      this.indexs = []
    }
    return result
  }

  print() {
    console.log(this.indexs)
    console.log(this.rev)
    console.log(this.heapContainer)
  }

  remove(index) {
    let item = this.heapContainer[index]
    // let itemIndex = -1
    let result
    // 用了for循环，复杂度为 O(n)
    // for (let i = 0; i < this.indexs.length; i++) {
    //   if (this.indexs[i] === index) {
    //     itemIndex = i
    //     break
    //   }
    // }

    let idxOfIndexs = this.rev[index]  // 数据的索引在indexs中的索引

    if (idxOfIndexs > -1 && idxOfIndexs !== this.size() - 1) {
      // this.rev[this.indexs[idxOfIndexs]] = -1  
      this.rev[index] = -1  // 相当于在indexs中删掉
      let lastIndexItem = this.indexs.pop()

      console.log(idxOfIndexs, lastIndexItem)
      // 把最后一个塞进去，up and down
      this.indexs[idxOfIndexs] = lastIndexItem
      // 相应的修改rev
      this.rev[lastIndexItem] = idxOfIndexs
      this.shiftDown(idxOfIndexs)
      this.shiftUp(idxOfIndexs)
      result = item
    }

    return result
  }

}

let a = new IndexMaxHeap(10)

a.add(50)
a.add(5)
a.add(90)
a.add(89)
a.add(32)
a.add(33)
a.add(4)
a.remove(2)

// a.remove(7)
// a.remove(1)
a.print()
// while(a.size() > 0) {
//   console.log(a.dequeue())
// }