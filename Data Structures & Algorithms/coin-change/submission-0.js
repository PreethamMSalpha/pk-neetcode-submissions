class Solution {
    /**
     * @param {number[]} coins
     * @param {number} amount
     * @return {number}
     */
    coinChange(coins, amount) {
        if(amount == 0) return 0;

        const dp = Array.from({length: amount + 1}).fill(amount+1);
        console.log(dp)

        dp[0] = 0;

        for(let i=1; i<=amount; i++){
            for (const coin of coins){
                if(coin <= i){
                    dp[i] = Math.min(dp[i], 1+dp[i-coin])
                }
            }
        }

        return dp[amount] > amount ? -1 : dp[amount];
    }
}
