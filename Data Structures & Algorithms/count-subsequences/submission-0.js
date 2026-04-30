class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {number}
     */
    numDistinct(s, t) {
        const m = s.length, n = t.length;

        const dp = Array.from({length: m}, () => new Array(n).fill(-1));

        console.log(dp)

        function dfs(i, j){
            if(j == n) return 1;

            if(i == m) return 0;

            if(dp[i][j] != -1) return dp[i][j];

            let res = dfs(i+1, j);

            if(s[i] == t[j]){
                res += dfs(i+1, j+1);
            }

            dp[i][j] = res;
            return res;
        }

        return dfs(0, 0);
    }
}
