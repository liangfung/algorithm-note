/**
 *  二分查找（有序数组）
 * @param {Array} arr 
 * @param {number} x 
 */
function bsearch_1(arr, x) {
  let l = 0
  let r = arr.length - 1
  function find() {
    if (l > r) return -1;
    let g = Math.floor((l + r) / 2)
    if (arr[g] === x) {
      return g
    } else if (arr[g] < x) {
      l = g + 1
      return find()
    } else if (arr[g] > x) {
      r = g - 1
      return find()
    }
  }
  return find()
}

function bsearch_2(arr, x) {
  let l = 0
  let r = arr.length
  let guess
  while (l <= r) {
    guess = Math.floor((r + l) / 2)
    if (arr[guess] === x) {
      return guess
    } else if (arr[guess] < x) {
      l = guess + 1
    } else if (arr[guess] > x) {
      r = guess - 1
    }
  }
  return -1
}

var arr = [1, 2, 5, 23, 43, 45, 55, 78, 98, 100]
console.log(bsearch_1(arr, 98))
console.log(bsearch_2(arr, 98))