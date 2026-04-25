class Solution {
    /**
     * @param {number[]} prices
     * @return {number}
     */
    maxProfit(prices) {
        const n = prices.length;
        if(n <= 1) return 0;

        // let holding = -prices[0];
        // let cooldown = 0;
        // let sold = 0;
        let holding = new Array(n).fill(0);
        let cooldown = new Array(n).fill(0);
        let sold = new Array(n).fill(0);

        holding[0] = -prices[0]; // we bought at day 0;

        for(let i=1; i<n; i++){
            // let prevHolding = holding;
            // let prevCooldown = cooldown;
            // let prevSold = sold;

            holding[i] = Math.max(holding[i-1], cooldown[i-1] - prices[i]);

            sold[i] = holding[i-1]+prices[i];

            cooldown[i] = Math.max(cooldown[i-1], sold[i-1]);
        }

        return Math.max(sold[n-1], cooldown[n-1]);
    }
}
