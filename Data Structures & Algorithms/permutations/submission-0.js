class Solution {
    /**
     * @param {number[]} nums
     * @return {number[][]}
     */
    permute(nums) {
        let res = [];
        let visited = new Set();

        function backtrack(current){
            //base condition
            if(current.length == nums.length){
                return res.push([...current]);
            }

            for(let i=0; i<nums.length; i++){
                if(visited.has(nums[i])) continue;

                // choose
                visited.add(nums[i]);
                current.push(nums[i]);

                // backtrack
                backtrack(current);

                // unchoose
                visited.delete(nums[i]);
                current.pop();
            }
        }

        backtrack([]);

        return res;
    }
}
