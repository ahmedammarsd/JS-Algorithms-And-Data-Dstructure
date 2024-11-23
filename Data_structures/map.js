/*
  + A map is an unordered collection of key-value pairs.
    Both keys and values can be of any data type.

  + To retrive a value, you can use the corresponding key  

  # Object Vs Map
   - objects are unordered whereeas maps are orderd
   - keys in objects can only be string or symbol type wherease in maps, they can be of any type
   - objects are not iterables where as maps are iterables
   - anobject has a prototype and may contain a few default key which may collide with your own key if you're not careful.
     A map on the other hand does not contain any keys by default
   - The number of items in an object must be determinded manually where as it is reaadily available with the size property in a map
   - A part from storing data, you can attach functionality to an object,
     whereas maps are restricted to just storing data


*/

const map = new Map([
  [1, 2],
  ["3", 4],
  [7, 5],
  ["object", { name: "test", age: 5 }],
]);
map.set("test add", "value add");
console.log(map.get("3")); // 4
console.log("Size :", map.size);

console.log("========== Loop For Map ==========");
for (const [key, value] of map) {
  console.log(`The Key: ${key} , The Value: ${value}`);
}
console.log(map.get("object")?.name);
console.log(map.get("object")?.age);
