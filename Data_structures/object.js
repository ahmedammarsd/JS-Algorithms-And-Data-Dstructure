/*
     + An object is an unordered collection of key-value pairs. 
       The key must either be a string or symbol data type where as the value can be of any data type

*/

const testObject = {
  name: "the name value",
  age: 1,
  TestKey: "test_key",
};

const keys = Object.keys(testObject);
console.log("Keys", keys);

const values = Object.values(testObject);
console.log("Values", values);

const entries = Object.entries(testObject);
console.log("Entries", entries);

// Insert - O(1)
// Remove - O(1)
// Access - O(1)
// Search - O(n)
// Object.keys() - O(n)
// Object.values() - O(n)
// Object.entries() - O(n)
