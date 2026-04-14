class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    canJump(nums) {
        let maxReach = 0;

        for(let i=0; i<nums.length; i++){
            if(maxReach < i) return false; // cannot reach end

            maxReach = Math.max(maxReach, i + nums[i]);
        }

        return !!(maxReach >= nums.length - 1)
    }
}
