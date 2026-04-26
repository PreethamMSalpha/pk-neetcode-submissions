class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number}
     */
    findTargetSumWays(nums, target) {
        function dfs(index, currentSum){
            // base condition
            if(index == nums.length){
                return currentSum == target ? 1 : 0;
            }

            return dfs(index+1, currentSum + nums[index]) + dfs(index+1, currentSum - nums[index])
        }

        return dfs(0, 0)
    }
}
