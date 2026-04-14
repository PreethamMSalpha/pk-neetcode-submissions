class Solution {
    /**
     * @param {number[][]} matrix
     * @param {number} target
     * @return {boolean}
     */
    searchMatrix(matrix, target) {
        // we need to find in which row target exists
        // and do binary search in that row only

        let isFound = false;

        for(let i = 0; i<matrix.length; i++){
            let mat = matrix[i];

            if(mat[0] <= target && target <= mat[mat.length-1]){
                if(this.binarySearch(mat, target) >= 0) return true;
            }
        }

        return false;
    }

    binarySearch(nums, target){
        let l = 0;
        let r = nums.length - 1;

        while(l <= r){
            let mid = Math.floor((l+r)/2);

            if(nums[mid] == target) return mid;

            if(target <= nums[mid]) r = mid - 1;
            else l = mid + 1;
        }

        return -1;
    }
}
