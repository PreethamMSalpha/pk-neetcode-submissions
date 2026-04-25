class Solution {
    /**
     * @param {number} amount
     * @param {number[]} coins
     * @return {number}
     */
    change(amount, coins) {
        const dp = new Array(amount+1).fill(0);

        dp[0] = 1; // no of ways to sum of zero is 1 => no taking any coins

        for(const coin of coins){
            for(let a=coin; a<=amount; a++){
                dp[a] += dp[a - coin];
            }
        }

        return dp[amount];
    }
}
