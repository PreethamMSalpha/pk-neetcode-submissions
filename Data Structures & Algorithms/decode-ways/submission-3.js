class Solution {
    /**
     * @param {string} s
     * @return {number}
     */
    numDecodings(s) {
        if(!s || s[0] == '0') return 0;

        // *** dp method ***
        /*
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
        */

        let prev2 = 1;
        let prev1 = 1;

        for(let i=2; i<=s.length; i++){
            let curr = 0;
            const singleDigit = parseInt(s[i-1]);
            const doubleDigit = parseInt(s.slice(i-2, i));

            if(singleDigit != '0') curr += prev1;
            if(doubleDigit >= 10 && doubleDigit <= 26) curr += prev2;

            prev2 = prev1;
            prev1 = curr;
        }

        return prev1;
    }
}
