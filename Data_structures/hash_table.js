/*
    - A hash table , also known as hash map, is a data structure that is used to store key-value pairs.
    - Given a key , you can associate a value with that key for very fast lookup.

    # Set to store a key-value pair
    # Get to retrieve a value given its key
    # Remove to delete a key value pair.

    # Hashing function to convert a string key to a numeric index

    Hash Table Usage
     # Hash Tables are typically implemented where constant time lookup and insertion are required
     # Database indexing
     # Caches

*/

class HashTable {
  constructor(size) {
    this.table = new Array(size);
    this.size = size;
  }

  hash(key) {
    let total = 0;
    for (let i = 0; i < key.length; i++) {
      total += key.charCodeAt(i);
    }
    console.log("The Total: ", total, "========", total % this.size);

    return total % this.size;
  }

  set(key, value) {
    const index = this.hash(key);
    // this.table[index] = value;
    const bucket = this.table[index];
    if (!bucket) {
      this.table[index] = [[key, value]];
    } else {
      const sameKeyItem = bucket.find((item) => item[0] === key);
      if (sameKeyItem) {
        sameKeyItem[1] = value;
      } else {
        bucket.push([key, value]);
      }
    }
  }

  get(key) {
    const index = this.hash(key);
    // return this.table[index];
    const bucket = this.table[index];
    if (bucket) {
      const sameKeyItem = bucket.find((item) => item[0] == key);
      if (sameKeyItem) return sameKeyItem[1];
    }
    return undefined;
  }

  remove(key) {
    const index = this.hash(key);
    //this.table[index] = undefined;
    const bucket = this.table[index];
    if (bucket) {
      const sameKeyItem = bucket.find((item) => item[0] === key);
      if (sameKeyItem) {
        let indexOfKeyAndValue = bucket.indexOf(sameKeyItem);
        bucket.splice(indexOfKeyAndValue, 1);
      }
    }
  }

  display() {
    for (let i = 0; i < this.table.length; i++) {
      if (this.table[i]) {
        console.log(i, this.table[i]);
      }
    }
  }
}

const table = new HashTable(50);

table.set("name", "ahmed");
table.set("age", 20);
table.set("aeg", 23);
table.set("i", "india");
table.set("s", "sudan");
table.set("aeg", 25);
console.log(table.get("aeg"));
table.display();
