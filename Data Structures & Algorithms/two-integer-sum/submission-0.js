class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums, target) {
        // map -> {num, index}
        let map = new Map();
        // let res = [];

        for(let i=0; i<nums.length; i++){
            let current_num = nums[i];
            let required_num = target - nums[i];

            if(map.has(required_num)){
                return [map.get(required_num), i]
            }

            map.set(current_num, i);
        }

    }
}
