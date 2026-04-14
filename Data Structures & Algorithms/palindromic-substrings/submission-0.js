class Solution {
    /**
     * @param {string} s
     * @return {number}
     */
    countSubstrings(s) {
        if(s.length == 1) return 1;

        let count = 0;

        function isPali(l, r){
            while(l >= 0 && r < s.length && s[l] == s[r]){
                count++;
                l--;
                r++;
            }
        }

        for(let i=0; i<s.length; i++){
            // odd length
            let l=i, r=i;
            isPali(l, r);
            // even length
            l = i, r = i+1;
            isPali(l, r);
        }

        return count;
    }
}
