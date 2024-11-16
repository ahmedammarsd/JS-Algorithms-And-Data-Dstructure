// Poblem : Given an array of integers, sort the array.

function bubbleSort(array) {
  let swapped;

  do {
    swapped = false;
    for (let i = 0; i < array.length - 1; i++) {
      if (array[i] > array[i + 1]) {
        let temp = array[i];
        array[i] = array[i + 1];
        array[i + 1] = temp;
        swapped = true;
      }
    }
  } while (swapped);
  return array;
}

//console.log(bubbleSort([-6, 20, 8, -2, 4]));//
console.time();
console.log(bubbleSort([4, 3, 2, 1]));
console.timeEnd();
// Big O = O(n^2)
