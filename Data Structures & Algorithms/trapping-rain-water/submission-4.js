class Solution {
    /**
     * @param {number[]} height
     * @return {number}
     */
    trap(height) {
        let l = 0; 
        let r = height.length - 1;
        let maxLeft = 0, maxRight = 0;
        let res = 0;

        while(l < r){
            if(height[l] < height[r]){
                maxLeft = Math.max(maxLeft, height[l]);
                res += maxLeft - height[l];
                l++;
            }else{
                maxRight = Math.max(maxRight, height[r]);
                res += maxRight - height[r];
                r--;
            }   
        }

        return res;
    }
}
