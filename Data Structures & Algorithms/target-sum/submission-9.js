class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number}
     */
    findTargetSumWays(nums, target) {
        const n = nums.length;
        const total = nums.reduce((a,b) => a+b, 0);

        const offset = total;
        const size = total * 2 + 1;

        let prev = new Array(size).fill(0);
        prev[offset] = 1;

        for(const num of nums){
            const curr = new Array(size).fill(0);
            for(let j = 0; j<size; j++){
                if(j - num >= 0) curr[j] += prev[j - num];
                if(j + num < size) curr[j] += prev[j + num];
            }
            prev = curr;
        }

        return prev[offset+target] || 0;
    }
}
