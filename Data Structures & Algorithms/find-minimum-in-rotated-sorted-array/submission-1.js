class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    findMin(nums) {
        let l=0, r=nums.length-1;

        if(nums.length == 1) return nums[0];

        let res = nums[0];

        while(l <= r){
            // base condition - what if the array is sorted with n rotation
            if(nums[l] < nums[r]){
                res = Math.min(res, nums[l]);
                break;
            }

            let mid = parseInt((r + l)/2);
            // console.log(mid)
            res = Math.min(res, nums[mid])

            if(nums[mid] >= nums[l]){ // search right
                l = mid + 1;
            }else{
                r = mid - 1;
            }
        }

        return res;
    }
}
