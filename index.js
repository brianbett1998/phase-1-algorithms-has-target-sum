function hasTargetSum(array, target) {
  // Write your algorithm here
   for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[i] + arr[j] === target) {
        return true;
      }
    }
  }
  return false;
}

  hasTargetSum([3, 8, 12, 4, 11, 7], 10);
// returns true, since 3 and 7 add up to 10

hasTargetSum([22, 19, 4, 6, 30], 25);
// returns true, since 19 and 6 add up to 25

hasTargetSum([1, 2, 5], 4);
// returns false, since no pair of numbers adds up to 4

/* 
  Write the Big O time complexity of your function here
*/
//This implementation has a runtime complexity of O(n^2), since it has to compare every pair of elements in the array. 

/* 
  Add your pseudocode here
  function hasTargetSum(arr, target):
  for i = 0 to arr.length - 1 do
    for j = i + 1 to arr.length - 1 do
      if arr[i] + arr[j] = target then
        return true
    end for
  end for
  return false
end function

*/

/*
  Add written explanation of your solution here
*/
//The function iterates iver all pairs of elements in the array and checks if their sum is equal to the target.If a apair with the right su is found, the function returns true.If no pair is found, the funnction returns false
// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", hasTargetSum([3, 8, 12, 4, 11, 7], 10));

  console.log("");

  console.log("Expecting: true");
  console.log("=>", hasTargetSum([22, 19, 4, 6, 30], 25));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", hasTargetSum([1, 2, 5], 4));
}

module.exports = hasTargetSum;
