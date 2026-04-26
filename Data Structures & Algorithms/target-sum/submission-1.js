class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number}
     */
    findTargetSumWays(nums, target) {
        let memo = new Map();

        function dfs(index, currentSum){
            // base condition
            if(index == nums.length){
                return currentSum == target ? 1 : 0;
            }

            const key = `${index}_${currentSum}`;
            if(memo.has(key)) return memo.get(key);

            const result = dfs(index+1, currentSum + nums[index]) + dfs(index+1, currentSum - nums[index]);
            memo.set(key, result);
            return result;
        }

        return dfs(0, 0)
    }
}
