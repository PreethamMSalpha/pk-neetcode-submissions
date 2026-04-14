class Solution {
    /**
     * @param {string} text1
     * @param {string} text2
     * @return {number}
     */

    /*
    longestCommonSubsequence(text1, text2) {
        const m = text1.length;
        const n = text2.length;

        const dp = Array.from({length: m+1}, () => new Array(n+1).fill(0));

        for(let i=1; i<=m; i++){
            for(let j=1; j<=n; j++){
                if(text1[i-1] == text2[j-1]){
                    dp[i][j] = 1 + dp[i-1][j-1];
                }else{
                    dp[i][j] = Math.max(dp[i-1][j], dp[i][j-1]);
                }
            }
        }

        return dp[m][n];
    }
    */

    // space optimized solution
    longestCommonSubsequence(text1, text2) {
        const m = text1.length;
        const n = text2.length;

        let prev = new Array(n+1).fill(0);

        for(let i=1; i<=m; i++){
            const curr = new Array(n+1).fill(0);
            for(let j=1; j<=n; j++){
                if(text1[i-1] == text2[j-1]){
                    curr[j] = 1 + prev[j-1];
                }else{
                    curr[j] = Math.max(curr[j-1], prev[j]);
                }
            }

            prev = curr;
        }

        return prev[n];
    }
}
