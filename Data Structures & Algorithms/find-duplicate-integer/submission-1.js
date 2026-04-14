class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    findDuplicate(nums) {
        let slow = 0, fast = 0;

        // step1 - detect cycle
        while(true){
            slow = nums[slow];
            fast = nums[nums[fast]];

            if(slow == fast) break;
        }

        // step2 - take new slow pointer from beginning
        // the point of intersection between slow and slow2 pointer is result

        let slow2 = 0;

        while(true){
            slow = nums[slow];
            slow2 = nums[slow2];

            if(slow == slow2) return slow;
        }
    }
}
