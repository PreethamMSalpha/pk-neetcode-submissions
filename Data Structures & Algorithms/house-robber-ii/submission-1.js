class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    rob(nums) {
        let len = nums.length;
        if(len == 1) return nums[0];

        return Math.max(
            this.helper(nums.slice(0, len-1)),
            this.helper(nums.slice(1))
        );
    }

    helper(nums){
        if(nums.length == 1) return nums[0];
        if(nums.length == 2) return Math.max(nums[0], nums[1])

        let prev2 = nums[0];
        let prev1 = Math.max(nums[0], nums[1]);

        for(let i=2; i<nums.length; i++){
            const curr = Math.max(nums[i]+prev2, prev1);
            prev2 = prev1
            prev1 = curr;
        }

        return prev1;
    }

}
