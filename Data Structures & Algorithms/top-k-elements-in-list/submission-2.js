class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums, k) {
        let res = [];
        let map = new Map(); // value, frequencies
        
        for(let n of nums){
            map.set(n, (map.get(n) || 0) + 1);
        }
        // map -> {1:1,2:2,3:3}

        let bucket = Array.from({length: nums.length+1}, () => []);
        console.log('init bucket -> ', bucket)
        // bucket
        // 0    1     2    3    4   5   6
        // [[], [1], [2], [3], [], [], []]

        for(let [key, value] of map.entries()){
            console.log('value index -> ', value)
            // console.log('key, value -> ', key, value)
            bucket[value].push(key);
            console.log('bucket[value] -> ', bucket[value])
            console.log('bucket -> ', bucket)
        }

        // console.log('bucket -> ', bucket)

        for(let i=bucket.length-1; i>=0; i--){
            let bucket_value = bucket[i];

            if(bucket_value.length){
                res.push(...bucket_value);
            }

            if(res.length >= k) return res;
        }

        return res;
    }
}
