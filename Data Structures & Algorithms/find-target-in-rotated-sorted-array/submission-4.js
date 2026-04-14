class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number}
     */
    search(nums, target) {
        let l = 0;
        let r = nums.length - 1;

        while(l <= r){
            let mid = parseInt((l+r)/2);

            if(nums[mid] == target) return mid;

            if(nums[l] <= nums[mid]){ // left array is sorted
                if(nums[l] <= target && target < nums[mid]){ // search in left
                    r = mid - 1;
                }else{ // search in right
                    l = mid + 1;
                }
            }else{ // right array is sorted
                if(nums[mid] < target && target <= nums[r]){ // search in right
                    l = mid + 1;
                }else{ // search in left
                    r = mid - 1;
                }
            }
        }

        return -1;
    }
}
