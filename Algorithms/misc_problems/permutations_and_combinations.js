/*

   Input: nums = [1,2,3]
   Output: [[1,2,3],[1,3,2],[2,1,3],[2,3,1],[3,1,2],[3,2,1]]  

*/

function permutations(nums) {
  let arrayPermutation = [];

  for (let i = 0; i < nums.length; i++) {
    let insideArray = [];
    insideArray.push(nums[i]);
    for (let j = 0; j < nums.length; j++) {
      if (i == j) {
        continue;
      }
      insideArray.push(nums[j]);
    }

    arrayPermutation.push(insideArray);
    if (nums.length > 2) {
      let arrayTwo = [...insideArray];
      let last = arrayTwo.pop();
      let lastTwo = arrayTwo.pop();
      arrayTwo.push(last);
      arrayTwo.push(lastTwo);
      if (nums.length >= 4) {
        let lastThree = arrayTwo.pop();
        arrayTwo.push(lastThree);
      }
      if (nums.length >= 5) {
        let lastFour = arrayTwo.pop();
        arrayTwo.push(lastFour);
      }
      if (nums.length >= 6) {
        let lastFive = arrayTwo.pop();
        arrayTwo.push(lastFive);
      }

      arrayPermutation.push(arrayTwo);

      // let insideArrayTWo = [];
      // insideArrayTWo.push(nums[i]);

      // for (let x = nums.length - 1; x >= 0; x--) {
      //   if (i == x) {
      //     continue;
      //   }
      //   insideArrayTWo.push(nums[x]);
      // }
      // arrayPermutation.push(insideArrayTWo);
    }
  }
  console.log(arrayPermutation);
  console.log(arrayPermutation.length);
}
//permutations([5, 4, 6, 2]);

var permute = function (nums, arr = [], result = []) {
  console.log("============= Start Function ================");
  if (nums.length === 0) {
    result.push([...arr]);
  }
  console.log(nums, arr, result, " ===== Nums Lendth", nums.length);
  console.log("============= start loop ================");
  for (let i = 0; i < nums.length; i++) {
    let rest = nums.filter((n, index) => i !== index);
    arr.push(nums[i]);
    console.log(rest, nums[i]);
    console.log("The arr 2", arr);
    permute(rest, arr, result);
    arr.pop();
    console.log("The arr 3", arr);
  }
  console.log("============= End loop ================");
  //return result;
  //  console.log(result);
  console.log("============= End Function ================");
};

//permute([1, 2, 3]);
async function sleep(millis) {
  await new Promise((r) =>
    setTimeout(() => {
      console.log("ahemd");
    }, millis)
  );
  console.log(Date.now());
}
sleep(100);
// let array = [1, 2, 3, 4];
// array.pop();
// array.pop();
// console.log(array);
