// Poblem : Given an array of integers, sort the array.

function insertionSort(array) {
  for (let i = 1; i < array.length; i++) {
    let numberToInsert = array[i];
    let j = i - 1;
    // console.log(array);
    while (j >= 0 && array[j] > numberToInsert) {
      array[j + 1] = array[j];
      j = j - 1;
    }
    array[j + 1] = numberToInsert;
  }
  return array;
}

console.time();
console.log(insertionSort([4, 3, 2, 1, 5]));
console.timeEnd();

// Big O = O(n^2)
