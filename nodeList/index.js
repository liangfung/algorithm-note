function ListNode(val) {
  this.val = val;
  this.next = null;
}

var list = new ListNode(1)
list.next = new ListNode(2)
list.next.next = new ListNode(3)
list.next.next.next = new ListNode(4)
list.next.next.next.next = new ListNode(5)


/**
 * 反转单向链表
 * 递归写法
 * @param {*} head 
 */
var reverseList = function(head) {
  if(!head || !head.next) return head
  
  let p = reverseList(head.next)
  console.log('p---', p)
  console.log('head--', head)
  head.next.next = head
  head.next = null
  return p  
}

// console.log(reverseList(list))

var swapPairs = function(head) {
  let idx = 0
  let curNode = head
  let newHead = head
  let evenNode = null
  while(curNode && curNode.next) {
    console.log(idx, curNode.val)
    let next = curNode.next
    if(idx === 0) newHead = next
    if(idx % 2 === 0) {
        let exchanger = curNode.next.next
        curNode.next.next = curNode
        curNode.next = exchanger
        if(evenNode) evenNode.next = next
        evenNode = curNode
    } else {
      curNode = next
    }
    idx++
      
  }
  return newHead
}

console.log(swapPairs(list))