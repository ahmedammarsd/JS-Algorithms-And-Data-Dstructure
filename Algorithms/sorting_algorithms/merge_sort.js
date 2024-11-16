// Problem - Given an array of Integers, sort the array

function mergeSort(array) {
  if (array.length < 2) {
    return array;
  }
  const mid = Math.floor(array.length / 2);

  let leftArray = array.slice(0, mid);
  let rightArray = array.slice(mid);

  return merge(mergeSort(leftArray), mergeSort(rightArray));
}
function merge(leftArr, rightArr) {
  const sortedArray = [];
  while (leftArr.length && rightArr.length) {
    if (leftArr[0] <= rightArr[0]) {
      sortedArray.push(leftArr.shift());
    } else {
      sortedArray.push(rightArr.shift());
    }
  }
  return [...sortedArray, ...leftArr, ...rightArr];
}

console.time();
console.log(mergeSort([4, 2, 6, 2, 9, 1]));
console.timeEnd();

// Big O = O(nlogn)
