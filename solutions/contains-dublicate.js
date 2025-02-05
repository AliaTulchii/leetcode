// Given an integer array nums, return true if any value appears at least twice in the array, and return false if every element is distinct.

// Example 1:
// Input: nums = [1,2,3,1]
// Output: true
// Explanation:
// The element 1 occurs at the indices 0 and 3.


function  containsDuplicate(nums) {
    nums.sort((a,b) => a - b);
    for (let i = 1; i < nums.length; i++) {
        if(nums[i] === nums[i - 1]){
            return true;
        }
    }
    return false;
};

console.log(containsDuplicate([1,2,3,0]))