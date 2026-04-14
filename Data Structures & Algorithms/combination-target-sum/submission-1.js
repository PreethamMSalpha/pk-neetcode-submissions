class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @returns {number[][]}
     */
    combinationSum(nums, target) {
        let res = [];

        function backtrack(currentIdx, remaining, current){
            // base condition
            if(remaining == 0){
                return res.push([...current]);
            }

            if(remaining < 0 || currentIdx >= nums.length){
                return;
            }

            // include currentIdx
            current.push(nums[currentIdx]);
            backtrack(currentIdx, remaining - nums[currentIdx], current);

            // exclude currentIdx and move to nextIdx
            current.pop();
            backtrack(currentIdx + 1, remaining, current);
        }

        backtrack(0, target, []);

        return res;
    }
}
