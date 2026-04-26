class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number}
     */
    findTargetSumWays(nums, target) {
        const n = nums.length;

        const total = nums.reduce((a,b) => a+b, 0);

        const size = total * 2 + 1;
        const offset = total;

        const dp = Array.from({length: n + 1}, () => new Array(size).fill(0));
        dp[0][offset] = 1;

        for(let i=1; i<=n; i++){
            const num = nums[i-1];

            for(let j=0; j<size; j++){
                if(j - num >= 0){
                    dp[i][j] += dp[i-1][j-num];
                }
                if(j + num < size){
                    dp[i][j] += dp[i-1][j + num];
                }
            }
        }
        return dp[n][offset + target] || 0;
    }
}
