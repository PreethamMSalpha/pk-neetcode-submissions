class Solution {
    /**
     * @param {number} m
     * @param {number} n
     * @return {number}
     */
    uniquePaths(m, n) {
        const dp = Array.from({length: m}, () => Array.from({length:n}).fill(1));
        // console.log(dp)


        for(let i = 1; i<m; i++){
            for(let j=1; j<n; j++){
                dp[i][j] = dp[i][j-1]+dp[i-1][j];
            }
        }

        return dp[m-1][n-1];
    }
}
