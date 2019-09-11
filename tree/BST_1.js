// import Queue from '../queue'
const Queue = require('../queue')

class Node {
  constructor(value) {
    // this.key = null
    this.value = value
    this.right = null
    this.left = null
  }
}

class BST {
  constructor() {
    this.root = null
    this.count = 0
  }

  size() {
    return this.count
  }

  isEmpty() {
    return this.size() === 0
  }

  _insert(node, value) {
    if (node === null) {
      node = new Node(value)
      this.count++
    }
    else if (node.value < value) {
      node.right = this._insert(node.right, value)
    }
    else if (node.value > value) {
      node.left = this._insert(node.left, value)
    }
    else {
      node.value = value
    }
    return node
  }

  insert(value) {
    this.root = this._insert(this.root, value)
  }

  contain(value) {
    return this._contain(this.root, value)
  }

  _contain(node, value) {
    if (!node) return false
    if (node.value === value) return true
    else if (node.value > value) {
      return this._contain(node.left, value)
    }
    else {
      return this._contain(node.right, value)
    }
  }

  preOrder() {
    this._preOrder(this.root)
  }

  _preOrder(node) {
    if (!node) return
    console.log(node.value)
    this._preOrder(node.left)
    this._preOrder(node.right)
  }

  inOrder() {
    this._inOrder(this.root)
  }

  _inOrder() {

  }

  postOrder() {

  }

  _postOrder() {

  }

  /**
   * 广度优先遍历
   */
  breadthOrder() {
    let queue = new Queue()
    this._breath_in(this.root, queue)
    this._breath_out(queue)
  }

  _breath_in(node, queue) {
    if (!node) return
    queue.enQueue(node)
  }

  _breath_out(queue) {
    if (queue.getLength() > 0) {
      let node = queue.deQueue()

      // do something with the ordered-node
      this._breath_do(node)

      this._breath_in(node.left, queue)
      this._breath_in(node.right, queue)

      // 递归
      this._breath_out(queue)
    }
  }

  _breath_do(node) {
    // 简单的打印一下
    if (node) console.log(node.value)
  }

  /**
   * 广度优先更简洁写法
   */
  levelOrder() {
    if (!this.root) return
    let queue = new Queue()
    queue.enQueue(this.root)
    while (queue.getLength() > 0) {
      let node = queue.deQueue()
      console.log(node.value)
      if (node.left) queue.enQueue(node.left)
      if (node.right) queue.enQueue(node.right)
    }
  }

  minium() {
    let node = this._minium(this.root)
    return node ? node.value : null
  }

  _minium(node) {
    if (node && node.left) {
      return this._minium(node.left)
    }
    return node
  }



  maxium() {
    let node = this._maxium(this.root)
    return node ? node.value : null
  }

  _maxium(node) {
    if(!node) return null
    if(node.right) {
      return this._maxium(node.right)
    }
    return node
  }

}

let b = new BST()

b.insert(23)
b.insert(50)
b.insert(9)
b.insert(3)
b.insert(2)
b.insert(33)
b.insert(31)
b.insert(66)

// console.log(b)
// console.log(b.size())
console.log(b.minium())
console.log(b.maxium())