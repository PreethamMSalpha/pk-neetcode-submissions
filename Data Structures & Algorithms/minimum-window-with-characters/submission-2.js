class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {string}
     */
    minWindow(s, t) {
        let resIdx = [-1, -1];
        let minLen = Infinity;

        let need = {}, have = {};
        let counter = 0;

        // calculate the freq of t
        for(const ch of t) need[ch] = (need[ch] || 0) + 1;

        const reqUniqCharLen = Object.keys(need).length;

        let l = 0; // starting pointer

        for(let r=0; r<s.length; r++){
            let charRight = s[r];
            have[charRight] = (have[charRight] || 0) + 1;

            if(have[charRight] == need[charRight]) counter++;

            while(counter == reqUniqCharLen){
                if(r - l + 1 < minLen){
                    minLen = (r - l + 1);
                    resIdx = [l, r];
                }

                //remove char
                let charLeft = s[l];
                have[charLeft]--;

                // the character we removed is included in "need", then it's wrong move so decrement counter
                if(need[charLeft] && (have[charLeft] < need[charLeft])){
                    counter--;
                }

                l++
            }

        }

        return resIdx[0] == -1 ? '' : s.substring(resIdx[0], resIdx[1]+1);
    }
}
