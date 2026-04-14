class Solution {
    /**
     * @param {number} n
     * @return {number}
     */
    climbStairs(n) {
        if(n <= 2) return n;

        // ******** DP approach *************
        // const dp = Array.from({length: n+1}).fill(0);

        // dp[1] = 1;
        // dp[2] = 2;

        // for(let i=3; i<=n+1; i++){
        //     dp[i] = dp[i-1]+dp[i-2]
        // } 

        // return dp[n]


        // ********* memoization approach *********
        const memo = {};

        function dfs(n, memo = {}){
            if(n <= 2) return n;

            if(memo[n]) return memo[n];

            memo[n] = dfs(n-1, memo) + dfs(n-2, memo);

            return memo[n];
        }

        dfs(n, memo);

        return memo[n]
    }
}
