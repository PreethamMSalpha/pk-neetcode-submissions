class Solution {
    /**
     * @param {number[]} nums
     * @return {number[][]}
     */
    subsets(nums) {

        let res = [];

        function backtrack(idx, current){
            // base case
            if(idx == nums.length){
                res.push([...current]);
                return;
            }

            // choice 1:- choose nums[idx]
            current.push(nums[idx]);
            backtrack(idx + 1, current);

            // choice 2:- ignore nums[idx]
            current.pop()
            backtrack(idx + 1, current);
        }

        backtrack(0, []);

        return res;
    }
}
