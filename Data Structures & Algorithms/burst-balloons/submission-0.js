class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    maxCoins(nums) {
        const ballons = [1, ...nums, 1];
        const n = ballons.length;

        const dp = Array.from({length: n}, () => new Array(n).fill(0));

        for(let len=2; len<n; len++){
            for(let i=0; i+len<n; i++){
                const j = i+len;

                for(let k = i+1; k<j; k++){
                    const coins = ballons[i] * ballons[k] * ballons[j];
                    dp[i][j] = Math.max(dp[i][j], dp[i][k] + coins + dp[k][j])
                }
            }
        }

        return dp[0][n-1];
    }
}
