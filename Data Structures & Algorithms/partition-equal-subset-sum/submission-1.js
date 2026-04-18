class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    canPartition(nums) {
        let totalSum = nums.reduce((a,b) => a+b, 0);

        if(totalSum % 2 != 0) return false;

        const target = totalSum / 2;

        let dp = new Set([0]);

        for(const num of nums){
            let newDP = new Set(dp);

            for(const val of dp){
                const newSum = num + val;

                if(newSum == target) return true;

                if(newSum < target) newDP.add(newSum);
            }

            dp = newDP;
        }

        return false;
    }
}
