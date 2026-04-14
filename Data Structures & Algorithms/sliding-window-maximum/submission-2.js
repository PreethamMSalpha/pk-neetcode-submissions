class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    maxSlidingWindow(nums, k) {
        let res = [];
        let deque = []; // store index, front = max, monotonic decreasing queue

        /*
            right - left + 1 = k (window length)
            left = right - k + 1
        */

        /*
            window is full => i + 1 = k
        */

        for(let i=0; i<nums.length; i++){
            // remove elements outside window from front
            if(deque.length && deque[0] < i - k + 1){
                deque.shift()
            }
            // remove smaller elements from back
            while(deque.length && nums[deque[deque.length - 1]] < nums[i]){
                deque.pop();
            }
            
            // add current index
            deque.push(i);

            // window is complete — record maximum
            if(i >= k - 1){
                res.push(nums[deque[0]]);
            }
        }

        return res;
    }
}
