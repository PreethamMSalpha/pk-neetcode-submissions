class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs) {
        let map = new Map();

        for(let str of strs){
            let sorted_key = str.split('').sort().join('');
            if(map.has(sorted_key)){
                map.get(sorted_key).push(str);
            }else{
                map.set(sorted_key, [str])
            }
        }

        return Array.from(map.values());
    }
}
