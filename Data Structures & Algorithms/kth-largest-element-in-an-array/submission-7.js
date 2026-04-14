class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number}
     */
    findKthLargest(nums, k) {
        let targetIdx = nums.length - k;

        function quickSelect(l, r){
            let currIdx = l, pivot = nums[r];

            for(let i=l; i<r; i++){
                if(nums[i] <= pivot){
                    // swap(i, currIdx)
                    [nums[i], nums[currIdx]] = [nums[currIdx], nums[i]];
                    currIdx++;
                }
            }

            // swap currIdx, right element(pivot)
            [nums[currIdx], nums[r]] = [nums[r], nums[currIdx]];

            if(currIdx < targetIdx) return quickSelect(currIdx+1, r)
            else if(currIdx > targetIdx) return quickSelect(l, currIdx - 1)
            else return nums[currIdx];
        }

        return quickSelect(0, nums.length - 1);
    }
}
