class Solution {
    /**
     * @param {number[]} temperatures
     * @return {number[]}
     */
    dailyTemperatures(nums) {
        // we have to use monotonic decresing stack
        let res = new Array(nums.length).fill(0);
        let stack_idx = [];

        for(let i=0; i<nums.length; i++){
            while(stack_idx.length && nums[stack_idx[stack_idx.length - 1]] < nums[i]){
                let idx = stack_idx.pop();
                res[idx] = i - idx;
            }
            stack_idx.push(i);
        }

        return res;
    }
}
