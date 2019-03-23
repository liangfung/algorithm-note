/**
 * 深度优先遍历
 * @param {*} node 
 */
function dfs(node) {
  const stack = [node]
  while(stack.length > 0) {
    const first = stack.shift()
    console.log(first.key)
    first.children.slice().reverse().forEach(child => stack.unshift(child))
  }
}

function Node(key) {
  this.children = []
  this.key = key
}
const n1 = new Node('1')
const n2 = new Node('2')
const n3 = new Node('3')
const n4 = new Node('4')
const n5 = new Node('5')
const n6 = new Node('6')

n1.children.push(n2)
n1.children.push(n5)
n2.children.push(n3)
n2.children.push(n4)
n5.children.push(n6)

dfs(n1)