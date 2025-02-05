// Given an integer array nums, rotate the array to the right by k steps, where k is non-negative.

 

// Example 1:

// Input: nums = [1,2,3,4,5,6,7], k = 3
// Output: [5,6,7,1,2,3,4]
// Explanation:
// rotate 1 steps to the right: [7,1,2,3,4,5,6]
// rotate 2 steps to the right: [6,7,1,2,3,4,5]
// rotate 3 steps to the right: [5,6,7,1,2,3,4]


function rotate(nums, k) {
    let array = nums.length;
    k = k % array;

    for (let i = 0; i < k; i++) {
        let last = nums.pop();
        nums.unshift(last)
    }
    return nums
};

// function rotate(nums, k) {
// let array = nums.length;
// k = k % array;

// function reverse(start, end){
//     [nums[start], nums[end]] = [nums[end], nums[start]];
//     start++;
//     end--;
// }

// reverse(0, array - 1);
// reverse(0, k - 1);
// reverse(k, array - 1);
// }

console.log(rotate([1,2,3,4,5,6,7],3))
console.log(rotate([1,2,3,4,5,6,7],5))
