class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    productExceptSelf(nums) {
        let prefill = Array.from({length: nums.length}, () => 1);
        let left = [...prefill];
        let right = [...prefill];
        let res = [...prefill];

        for(let i=1; i<nums.length; i++){
            left[i] = nums[i-1] * left[i-1];
        }

        for(let i=nums.length-2; i>=0; i--){
            right[i] = nums[i+1] * right[i+1];
        }

        for(let i = 0; i<nums.length; i++){
            res[i] = left[i] * right[i];
        }

        return res;
    }
}

// arr =  [1, 2, 4, 6]
// left = [1, 1, 2, 8]
// rigt = [48, 24, 6, 1]
// res =  [48, 24, 12, 8]]
