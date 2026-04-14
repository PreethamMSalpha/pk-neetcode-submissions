class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number}
     */
    search(nums, target) {
        if(nums.length == 1){
            if(nums[0] == target) return 0;
        }

        let l = 0, r = nums.length - 1;

        while(l <= r){
            const mid = Math.floor((r+l)/2);
            
            if(nums[mid] == target) return mid;

            if(target <= nums[mid]){
                r = mid-1;
            }else{
                l = mid + 1;
            }
        }

        return -1;
    }
}
