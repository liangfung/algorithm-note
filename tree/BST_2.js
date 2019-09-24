class Node {
  constructor(value) {
    this.value = value
    this.left = null
    this.right = null
  }
}

class BST {
  constructor() {
    this.count = 0
    this.root = null
  }

  size() {
    return this.count
  }

  print() {
    console.log(this.root)
  }

  insert(value) {
    this.root = this._insert(this.root, value)
  }

  _insert(node, value) {
    if (!node) {
      this.count++
      return new Node(value)
    }
    if (node.value < value) {
      node.right = this._insert(node.right, value)
    } else if (node.value > value) {
      node.left = this._insert(node.left, value)
    }
    return node
  }

  maxium() {
    let node = this._maxium(this.root)
    return node ? node.value : null
  }

  _maxium(node) {
    if (!node) return null
    if (node.right) {
      return this._maxium(node.right)
    }
    return node
  }

  removeMax() {
    this.root = this._removeMax(this.root)
  }

  _removeMax(node) {
    if (!node) return null
    if (node.right) {
      node.right = this._removeMax(node.right)
    } else {
      this.count--
      return node.left
    }
    return node
  }

  /**
   * 删除值为value的node节点
   * @param {*} value 
   */
  remove(value) {
    this.root = this._remove(this.root, value)
  }

  _remove(node, value) {
    if (!node) return null
    if (node.value < value) {
      node.right = this._remove(node.right, value)
      return node
    }
    if (node.value > value) {
      node.left = this._remove(node.left, value)
      return node
    }
    // 找到node了
    let right = node.right
    let left = node.left
    this.count--
    if (right === null) {
      node = node.left
    } else if (left === null) {
      node = node.right
    } else {
      // 同时有左右子树
      let s = this._maxium(node.left)
      s.left = this._removeMax(node.left)
      s.right = right
      return s
    }
    return node
  }

  inOrder(fn) {
    this._in(this.root, fn)
  }

  _in(node, fn) {
    if(!node) return null
    this._in(node.left, fn)
    fn(node.value)
    this._in(node.right, fn)
  }

}

let b = new BST()

b.insert(20)
b.insert(5)
b.insert(3)
b.insert(10)
b.insert(11)
b.insert(1)
b.insert(2)
b.insert(33)
b.insert(32)
b.remove(20)

b.print()
b.inOrder(value => console.log('--'+ value))

console.log(__filename, __dirname)