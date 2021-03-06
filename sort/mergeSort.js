function merge(A, p, q, r) {
  let arr1 = [...A.slice(p, q), Number.MAX_SAFE_INTEGER]
  let arr2 = [...A.slice(q, r), Number.MAX_SAFE_INTEGER]
  let k = p
  let i = 0
  let j = 0
  while (k < r) {
    A[k] = arr1[i] < arr2[j] ? arr1[i++] : arr2[j++];
    k++
  }
}


/**
 * 原地合并排序
 * @param {array} A 
 * @param {number} p 
 * @param {number} r 
 */
function mergeSort(A, p, r) {
  if (r - p < 2) return A;
  let q = Math.ceil((p + r) / 2)
  mergeSort(A, p, q)
  mergeSort(A, q, r)
  merge(A, p, q, r)
  // return merge([...mergeSort(A, p, q), ...mergeSort(A, q, r)], p, q, r)
}

let a = [34,45,22]
mergeSort(a, 0, a.length)
console.log(a)