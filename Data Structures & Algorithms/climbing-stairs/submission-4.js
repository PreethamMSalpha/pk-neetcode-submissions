class Solution {
    /**
     * @param {number} n
     * @return {number}
     */
    climbStairs(n) {
        // step1 = 1;
        // step2 = 2
        // step3 = (1,1,1), (1,2), (2,1) = 3 => step2 + step1

        // formula => dp[i] = dp[i-1]+dp[i-2];
        if(n <= 2) return n;

        let step1 = 1;
        let step2 = 2;
        for(let i=3; i<=n; i++){
            const curr = step2+step1;
            [step1, step2] = [step2, curr];
        }

        return step2;
    }
}
