/**
 * 合并排序
 * @param {array} A 
 */
function mergeSort(A) {

  if(A.length <= 1) return A

  let q =  Math.floor(A.length / 2)
  let a1  = mergeSort(A.slice(0, q))
  let a2 = mergeSort(A.slice(q))
  return merge(a1, a2)
}

function merge(a1, a2) {
  // 将两个有序数组合并
  let result = []



  while(a1.length || a2.length) {
    if(!a1.length) {
      result.push(a2.shift())
    } else if(!a2.length) {
      result.push(a1.shift())
    } else if(a1[0] < a2[0]) {
      result.push(a1.shift())
    } else {
      result.push(a2.shift())
    }
  }


  return result
}

console.log(mergeSort([1,4,27,11,2,99,10,100,22,2,58,545,1000]))

// console.log(mergeSort([1]))

// console.log(mergeSort([1,4,22,2]))