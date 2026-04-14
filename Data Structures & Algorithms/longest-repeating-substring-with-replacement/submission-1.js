class Solution {
    /**
     * @param {string} s
     * @param {number} k
     * @return {number}
     */
    characterReplacement(s, k) {
        let freq = {};
        let maxCount = 0; // max char count
        let left = 0;
        let windowLen = 0; // return value

        for(let right = 0; right < s.length; right++){
            freq[s[right]] = (freq[s[right]] || 0) + 1;
            maxCount = Math.max(maxCount, freq[s[right]]);

            // const currentWindowSize = right - left + 1;
            while((right - left + 1) -  maxCount > k){
                freq[s[left]] -= 1
                left++;
            }

            windowLen = Math.max(windowLen, right - left + 1)            
        }

        return windowLen;
    }
}
