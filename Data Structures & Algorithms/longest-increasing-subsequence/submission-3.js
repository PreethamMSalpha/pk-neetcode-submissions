class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */

    /* ****** DP approach ****** O(n^2)
    lengthOfLIS(nums) {
        const n = nums.length;
        const dp = new Array(n).fill(1);
        let maxLen = 1;

        for(let i=1; i<n; i++){
            for(let j=0; j<i; j++){
                if(nums[j] < nums[i]){
                    dp[i] = Math.max(dp[i], 1 + dp[j])
                }
            }

            maxLen = Math.max(maxLen, dp[i]);
        }

        return maxLen;
    }
    */


    // Binary search approach -> n log(n)
    lengthOfLIS(nums) {
        let tails = [];
        
        for(const num of nums){
            let low = 0, high = tails.length;

            while(low < high){
                const mid = Math.floor((low+high)/2);
                if(tails[mid] < num) low = mid + 1;
                else high = mid;
            }

            tails[low] = num;
        }

        return tails.length;
    }

}
