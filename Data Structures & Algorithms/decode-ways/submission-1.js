class Solution {
    /**
     * @param {string} s
     * @return {number}
     */
    numDecodings(s) {
        if(!s || s[0] == '0') return 0;

        const dp = Array.from({length: s.length+1}).fill(0);

        dp[0] = 1;
        dp[1] = 1;

        for(let i=2; i<=s.length; i++){
            const singleDigit = parseInt(s[i-1]);
            const doubleDigit = parseInt(s.slice(i-2, i));

            if(singleDigit >= 1 && singleDigit <= 9){
                dp[i] += dp[i-1];
            }

            if(doubleDigit >= 10 && doubleDigit <= 26){
                dp[i] += dp[i-2];
            }
        }

        return dp[s.length];
    }
}
