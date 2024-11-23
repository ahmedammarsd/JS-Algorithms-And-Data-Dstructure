/*
  + A set is a data structure that can hold a collection of values.
  The values however must be unique

  # Sets do not maintain an insertion order

  Set Vs Array
  1- Arrays can contain duplicate values where as sets cannot
  2- insertion order is maintained in arrays but it is not the case with sets
  3- searching and deleting an element in the set is faster compared to arrays
*/

const set = new Set([1, 2, 3, 2]);
set.add(4);
console.log(set);
// console.log(set[0]);  Not Work In Set
console.log(set.values().next().value);
