class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @returns {number[][]}
     */

    // include & exclude indivisual number
    combinationSum(nums, target) {
        let res = [];

        function dfs(startIndex, currentArray, remaining){
            if(remaining == 0){
                return res.push([...currentArray]);
            }

            if(remaining < 0) return;

            for(let i = startIndex; i<nums.length; i++){
                // push
                currentArray.push(nums[i])
                // backtrack
                dfs(i, currentArray, remaining - nums[i])
                // pop
                currentArray.pop()
            }
        }

        dfs(0, [], target);
        return res;
    }
}
