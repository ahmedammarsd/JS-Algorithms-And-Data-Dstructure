// Problem - Given two finite non-empty sets,
//  find their cartesian product

function cartesianProduct(setOne, setTwo) {
  let array = [];
  for (let i = 0; i < setOne.length; i++) {
    for (let j = 0; j < setTwo.length; j++) {
      array.push([setOne[i], setTwo[j]]);
    }
  }
  return array;
}

console.log(cartesianProduct([1, 2], [3, 4]));
// Big O = O(mn)
