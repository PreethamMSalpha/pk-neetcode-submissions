class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    maxSubArray(nums) {
        let currSum = nums[0];
        let totalSum = nums[0];

        for(let i=1; i<nums.length; i++){
            currSum = Math.max(nums[i], currSum + nums[i]);
            totalSum = Math.max(currSum, totalSum);
        }

        return totalSum;
    }
}
