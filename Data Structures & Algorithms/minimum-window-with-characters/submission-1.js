class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {string}
     */
    minWindow(s, t) {

        // base case
        if(!t.length) return "";

        let l=0;
        let need = {}, have = {};
        let resIndx = [-1, -1];
        let minLen = Infinity;

        let counter = 0;
        for(let ch of t) need[ch] = (need[ch] || 0) + 1;
        let required = Object.keys(need).length;

        for(let r=0; r<s.length; r++){
            let charR = s[r];
            have[charR] = (have[charR] || 0) + 1;

            if(need[charR] && need[charR] == have[charR]){
                counter++;
            }

            while(counter == required){
                if(r - l + 1 < minLen){
                    minLen = r - l + 1;
                    resIndx = [l, r];
                }

                let charL = s[l];
                have[charL]--;

                if(need[charL] && have[charL] < need[charL]){
                    counter--;
                }

                l++;
            }
        }

        return resIndx[0] == -1 ? "" : s.substring(resIndx[0], resIndx[1] + 1);
    }
}
