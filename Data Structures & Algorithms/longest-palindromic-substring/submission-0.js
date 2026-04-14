class Solution {
    /**
     * @param {string} s
     * @return {string}
     */
    longestPalindrome(s) {
        if(s.length === 1) return s;

        let start = 0;
        let maxLen = 1;

        function checkPali(l, r){
            while(l >= 0 && r < s.length && s[l] == s[r]){
                if(r - l + 1 > maxLen){
                    maxLen = r-l+1;
                    start = l;
                }
                l--;
                r++;
            }
        }

        for(let i = 0; i<s.length; i++){
            // odd length
            checkPali(i, i);
            // even length
            checkPali(i, i+1);
        }

        return s.slice(start, start + maxLen);
    }
}
