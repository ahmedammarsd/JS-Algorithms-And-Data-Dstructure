// Problem - Given an array of n elemnts and a target -
// - element t , find the index of t in the array.
// Return -1 if the target element is not found

function linearSearch(arr, t) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] == t) {
      return i;
    }
  }

  return -1;
}

console.log(linearSearch([1, 2, 3, 4], 3));
console.log(linearSearch([1, 2, 3, 4], 5));

// Big O = O(n)
