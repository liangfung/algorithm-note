/**
 * 往一个有序数组插入x
 * @param {Array} arr [有序数组]
 * @param {Number} x  [待插入元素]
 */
function insert(arr, x) {
  // 相当于在有序数组后面加一个空位待命
  // P指针为要比较的元素
  // 遇到比x大的，P指向的元素往后赋值
  // 最后没碰到比X大的，把x赋值到P所在元素
  let p = arr.length - 1
  while (arr[p] >= x) {
    arr[p + 1] = arr[p]
    p--
  }
  arr[p + 1] = x
  return arr
}

// console.log(insert([1, 2, 5,8], 9))

function insert_sort(arr) {
  arr = [...arr]
  const _insert = (A, i, x) => {
    // A和i构成了一个有序数组
    // x为待插入的元素
    // i为待插入元素的index
    let p = i - 1
    while (A[p] > x) {
      A[p + 1] = A[p]
      p--
    }
    A[p + 1] = x
  }
  for (let i = 1; i < arr.length; i++) {
    _insert(arr, i, arr[i])
  }
  return arr
}

console.log(insert_sort([3, 6, 1, 3, 8, 9, 0, 22]))