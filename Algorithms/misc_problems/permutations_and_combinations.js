/*

   Input: nums = [1,2,3]
   Output: [[1,2,3],[1,3,2],[2,1,3],[2,3,1],[3,1,2],[3,2,1]]  

*/

function permutations(nums) {
  let arrayPermutation = [];

  for (let i = 0; i < nums.length; i++) {
    let insideArray = [];
    //  arrayPermutation.push(nums.slice(i, nums.length));
    insideArray.push(nums[i]);
    for (let j = nums.length - 1; j <= 0; j--) {
      if (i == j) {
        continue;
      }
      insideArray.push(nums[j]);
    }
    arrayPermutation.push(insideArray);
  }
  console.log(arrayPermutation);
  console.log(arrayPermutation.length);
}
permutations([1, 2, 3]);
