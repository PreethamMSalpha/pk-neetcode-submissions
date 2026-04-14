class Solution {
    /**
     * @param {string} digits
     * @return {string[]}
     */
    letterCombinations(digits) {
        if(digits.length == 0) return [];

        const map = {
            '2': 'abc', '3': 'def', '4': 'ghi',
            '5': 'jkl', '6': 'mno', '7': 'pqrs',
            '8': 'tuv', '9': 'wxyz'
        };

        let res = [];

        function backtrack(idx, curr){
            // base condition
            if(idx == digits.length){
                return res.push(curr);
            }

            for(const letter of map[digits[idx]]){
                backtrack(idx + 1, curr + letter);
            }
        }

        backtrack(0, '');

        return res;
    }
}
