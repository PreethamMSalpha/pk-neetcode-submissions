class Solution {
    /**
     * @param {number[]} nums
     * @return {number[][]}
     */
    subsets(nums) {

        let res = [];

        function dfs(idx, current){
            if(idx == nums.length){
                res.push([...current]);
                return;
            }

            // choice 1:- choose nums[idx]
            current.push(nums[idx]);
            dfs(idx + 1, current);

            // choice 2:- ignore nums[idx]
            current.pop()
            dfs(idx + 1, current);
        }

        dfs(0, []);

        return res;
    }
}
