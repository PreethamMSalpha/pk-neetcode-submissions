class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    checkValidString(s) {
        let low = 0;
        let high = 0;

        for(let i=0; i<s.length; i++){
            const char = s[i];

            if(char == '('){
                low++;
                high++;
            }else if(char == ')'){
                low--;
                high--;
            }else if(char == '*'){
                low--;
                high++;
            }

            if(high < 0) return false;

            low = Math.max(low, 0); // we are doing capping 
        }

        return low === 0;
    }
}
