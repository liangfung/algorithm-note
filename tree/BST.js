const Queue =  require('../queue')

function Node(value) {
  this.value = value
  this.left = null
  this.right = null
}

/**
 * 排序二叉树
 */
class BST {
  constructor() {
    this.root = null
    this.size = 0
  }

  addChild(v) {
    this.root = this._addChild(this.root, v)
  }

  getSize() {
    return this.size
  }

  isEmpty() {
    return this.size === 0
  }

  _addChild(node, v) {
    if (!node) {
      this.size++
      node = new Node(v)
    } else if (v < node.value) {
      node.left = this._addChild(node.left, v)
    } else if (v > node.value) {
      node.right = this._addChild(node.right, v)
    }
    return node
  }

  show() {
    return this.root
  }

  /**
   * 前序遍历
   */
  preOrder() {
    this._pre(this.root)
  }
  _pre(node) {
    if (node) {
      console.log(node.value)
      this._pre(node.left)
      this._pre(node.right)
    }
  }

  /**
   * 中序遍历
   */
  inOrder() {
    this._in(this.root)
  }
  _in(node) {
    if(node) {
      this._in(node.left)
      console.log(node.value)
      this._in(node.right)
    }
  }
  /**
   * 后续遍历
   */
  backOrder() {
    this._back(this.root)
  }
  _back(node) {
    if(node) {
      this._back(node.left)
      this._back(node.right)
      console.log(node.value)
    }
  }

  /**
   * 广度优先遍历
   */
  breadthOrder() {
    if(!this.root) return null
    let q = new Queue()
    q.enQueue(this.root)
    while(q.getLength()) {
      let n = q.deQueue()
      console.log(n.value)
      if(n.left) q.enQueue(n.left)
      if(n.right) q.enQueue(n.right)
    }
  }

  /**
   * 获取最大值
   */
  getMax() {
    return this._getMax(this.root)
  }
  _getMax(node) {
    if(!node.right) return node
    return this._getMax(node.right)
  }

  /**
   * 获取最小值
   */
  getMin() {
    return this._getMin(this.root)
  }
  _getMin(node) {
    if(!node.left) return node
    return this._getMin(node.left)
  }

  /**
   * 获取树的深度
   */
  getDepth() {
    return this._getDepth(this.root)
  }
  _getDepth(node) {
    if(node && (node.left || node.right)){
      let left = this._getDepth(node.left)
      let right = this._getDepth(node.right)
      return left > right ? left + 1 : right + 1
    }
    return 0
  }
}

var bst = new BST()
bst.addChild(5)
bst.addChild(3)
bst.addChild(11)
bst.addChild(7)
bst.addChild(20)
bst.addChild(2)
bst.addChild(33)

// console.log(bst.show())
console.log(bst.getDepth())
// bst.breadthOrder()

/**
 * 树的遍历
 */