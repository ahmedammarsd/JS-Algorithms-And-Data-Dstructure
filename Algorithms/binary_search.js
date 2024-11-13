// Problem - Given a sorted array of n elemnts and a target -
// - elemnt t , find the index of t in the array. -
// Return -1 if hte target elemnet is not found.

function birnarySearch(arr, target) {
  let leftIndex = 0;
  let rightIndex = arr.length - 1; //4 // 3  //2 //1

  while (leftIndex <= rightIndex) {
    let middleIndex = Math.floor((leftIndex + rightIndex) / 2); //2  //1

    if (target === arr[middleIndex]) {
      return middleIndex;
    }
    if (target < arr[middleIndex]) {
      rightIndex = middleIndex - 1;
    } else {
      leftIndex = middleIndex + 1;
    }
  }
  return -1;
}

// console.log(birnarySearch([1, 2, 3, 4, 5, 6, 7, 8, 9], 0));
// console.log(birnarySearch([1, 2, 3, 4, 5, 6, 7, 8, 9], 1));
console.log(birnarySearch([1, 2, 3, 4, 5], 1));

// Big O = O(logn)
