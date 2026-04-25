class Solution {
    /**
     * @param {number} n
     * @param {number[][]} flights
     * @param {number} src
     * @param {number} dst
     * @param {number} k
     * @return {number}
     */
    findCheapestPrice(n, flights, src, dst, k) {
        let prices = new Array(n).fill(Infinity);
        prices[src] = 0;

        // k stops = k + 1 edges
        for(let i=0; i<=k; i++){
            let temp = [...prices];

            for(const [s, d, p] of flights){
                // base check -> wether the source is reachable or not
                if(prices[s] == Infinity) continue;

                if(prices[s] + p < temp[d]){
                    temp[d] = prices[s] + p;
                }
            }

            prices = temp;
        }

        return prices[dst] == Infinity ? -1 : prices[dst];
    }
}
