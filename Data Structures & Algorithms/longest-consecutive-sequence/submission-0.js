class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    longestConsecutive(nums) {
        let set = new Set(nums);
        // console.log([...set]);
        let longest = 0;

        for(const n of set){
            if(!set.has(n-1)){ //beginning of sequence
                let len = 1;
                while(set.has(n+len)){
                    len++;
                }
                longest = Math.max(longest, len);
            }
        }

        return longest;
    }

    //[2,20,4,10,3,4,5]
    // set -> [2,20,4,10,3,5]

    // counter = 0
    // val + 1
}
