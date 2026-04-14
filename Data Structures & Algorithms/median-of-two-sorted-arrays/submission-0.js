class Solution {
    /**
     * @param {number[]} nums1
     * @param {number[]} nums2
     * @return {number}
     */
    findMedianSortedArrays(nums1, nums2) {
        if(nums1.length > nums2.length){
            [nums1, nums2] = [nums2, nums1];
        }

        const A = nums1;
        const B = nums2;

        const m = A.length;
        const n = B.length;

        // we do binary search on small array (which is 'A' here)

        let lo = 0, hi = m;

        while(lo <= hi){
            let i = Math.floor((lo+hi)/2);
            // j = mid - i
            let j = Math.floor((m+n+1)/2) - i; // +1 ensure extra element stays in left part of array

            const ALeft = (i == 0) ? -Infinity : A[i-1];
            const ARight = (i == m) ? +Infinity : A[i];
            const BLeft = (j == 0) ? -Infinity : B[j-1];
            const BRight = (j == n) ? +Infinity : B[j];

            // perfect partition
            if(ALeft <= BRight && BLeft <= ARight){
                const maxLeft = Math.max(ALeft, BLeft);
                const minRight = Math.min(ARight, BRight);

                if((m+n) % 2 == 0){ // even
                    return (maxLeft + minRight) / 2;
                }
                return maxLeft;
            }else if(ALeft > BRight){
                hi = i - 1;
            }else{
                lo = i + 1;
            }
        }
    }
}
