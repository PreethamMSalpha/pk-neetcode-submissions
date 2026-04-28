class Solution {
    /**
     * @param {string} s1
     * @param {string} s2
     * @param {string} s3
     * @return {boolean}
     */
    isInterleave(s1, s2, s3) {
        if(s1.length + s2.length != s3.length) return false;

        const m = s1.length, n = s2.length;

        const dp = Array.from({length: m+1}, () => new Array(n+1).fill(false));

        dp[0][0] = true; // 0 substring from s1 and 0 substring from s2 forms 0 substring from s3

        // consider taking s1 only 
        for(let i=1; i<=m; i++){
            dp[i][0] = dp[i-1][0] && s1[i-1] == s3[i-1];
        }
        // consider taking s2 only
        for(let j=1; j<=n; j++){
            dp[0][j] = dp[0][j-1] && s2[j-1] == s3[j-1];
        }
        // consider rest of elements
        for(let i=1; i<=m; i++){
            for(let j=1; j<=n; j++){
                const k = i+j-1;

                //dp[i][j] = char from s1[0...i-1] or char from s2[0...j-1]
                dp[i][j] = (dp[i-1][j] && s1[i-1] == s3[k]) || 
                            (dp[i][j-1] && s2[j-1] == s3[k]);
            }
        }

        return dp[m][n];
    }
}
