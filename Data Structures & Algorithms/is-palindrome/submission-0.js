class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isPalindrome(s) {
        let str = s.replace(/[^a-zA-Z0-9]/g, '').toLowerCase()
        // console.log(str)
        let l=0, r=str.length-1

        while(l <= r){
            if(str[l] != str[r]){
                return false;
            }
            l++;
            r--;
        }

        return true;
    }
}
