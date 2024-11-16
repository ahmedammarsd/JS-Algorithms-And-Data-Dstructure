// Problem - Given an array of integers, sort the array.

function quickSort(array) {
  if (array.length < 2) {
    return array;
  }
  let pivot = array.length - 1;
  let rightArray = [];
  let leftArray = [];

  for (let i = 0; i < array.length - 1; i++) {
    if (array[pivot] > array[i]) {
      leftArray.push(array[i]);
    } else {
      rightArray.push(array[i]);
    }
  }

  return [...quickSort(leftArray), array[pivot], ...quickSort(rightArray)];
}

//console.log(quickSort([2, 3, 8, 7, 5, 4, 9]));
console.time();
console.log(quickSort([20, 3, 5, 90, 4, 9]));
console.timeEnd();

// Big O = O(n^2)
// Big O = O(nlogn)
