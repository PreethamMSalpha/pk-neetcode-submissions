class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    jump(nums) {
        let jumps = 0;
        let maxReach = 0;
        let currEnd = 0;

        for(let i=0; i<nums.length-1; i++){
            maxReach = Math.max(maxReach, i+nums[i]);

            if(currEnd == i){
                jumps++;
                currEnd = maxReach;
            }
        }

        return jumps;
    }
}
