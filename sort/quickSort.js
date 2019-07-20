const quickSort = (arr) => {
  // 递归出口
  if(arr.length <= 1) return arr
  const q = arr.splice(0, 1)
  const left = []
  const right = []
  for(let o of arr) {
    if (o < q) {
      left.push(o)
    } else {
      right.push(o)
    }
  }
  return quickSort(left).concat(q, quickSort(right))
}

console.log(quickSort([3,5,6,2,1,3,4,7,97,]))