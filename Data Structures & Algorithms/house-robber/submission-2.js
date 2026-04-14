class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    rob(nums) {
        if(nums.length == 1) return nums[0];
        if(nums.length == 2) return Math.max(nums[0], nums[1]);


        // let prev2 = nums[0];
        // let prev1 = Math.max(nums[0], nums[1]);


        // for(let i=2; i<nums.length; i++){
        //     const curr = Math.max(nums[i] + prev2, prev1);
        //     prev2 = prev1;
        //     prev1 = curr;
        // } 


        // optimized code
        let prev2 = 0, prev1 = 0;

        for(const num of nums){
            const curr = Math.max(num+prev2, prev1);
            prev2 = prev1;
            prev1 = curr;
        }

        return prev1;
    }
}
