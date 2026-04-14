class Solution {
    /**
     * @param {string} s
     * @param {string[]} wordDict
     * @return {boolean}
     */
    wordBreak(s, wordDict) {
        const wordSet = new Set(wordDict);
        const n = s.length;

        const dp = new Array(n+1).fill(false);

        dp[0] = true; // 0 words can be segmented

        for(let i=1; i<=n; i++){
            for(let j=0; j<i; j++){
                if(dp[j] && wordSet.has(s.slice(j, i))){
                    dp[i] = true;
                    break;
                }
            }
        }

        return dp[n];
    }
}
