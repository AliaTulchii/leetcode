// Given two integer arrays nums1 and nums2, return an array of their intersection. Each element in the result
//  must appear as many times as it shows in both arrays and you may return the result in any order.

function intersection(nums1, nums2) {
    nums1.sort((a, b) => a - b)
    nums2.sort((a, b) => a - b)

    let i = 0, j = 0;
    let result = [];

    while(i < nums1.length && j < nums2.length) {
        if(nums1[i] === nums2[j]) {
            result.push(nums1[i]);
            i++;
            j++;
        }else if( nums1[i] < nums2[j]){
            i++;
        }else{
            j++;
        }
    }

    return result;
};

console.log(intersection([4,9,5], [9,4,9,8,4]));