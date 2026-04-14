class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    jump(nums) {
        let res = 0;
        let left = 0, right = 0;

        while(right < nums.length - 1){
            let farthest = 0;
            for(let i=left; i<=right; i++){
                farthest = Math.max(farthest, i + nums[i]);
            }

            left = right + 1;
            right = farthest;
            res++;
        }   

        return res;
    }
}
