class Solution {
    /**
     * @param {number[]} nums
     * @return {number[][]}
     */
    subsetsWithDup(nums) {
        let res = [];
        nums.sort((a,b) => a-b);

        function backtrack(idx, curr){
            // base condition
            res.push([...curr]); // every subsets is valid here

            for(let i=idx; i<nums.length; i++){
                if(i > idx && nums[i] == nums[i-1]) continue; // skip duplicates

                // choose
                curr.push(nums[i]);
                // backtrack
                backtrack(i + 1, curr);
                // unchoose
                curr.pop();
            }
        }

        backtrack(0, []);

        return res;
    }
}
