class Solution {
    /**
     * @param {number} n
     * @return {string[]}
     */
    generateParenthesis(n) {
        let res = [];

        function backtrack(open, close, curr){
            // base condition
            if(curr.length == 2 * n){
                res.push(curr);
            }

            if(open < n){
                backtrack(open + 1, close, curr + "(");
            }

            if(close < open){
                backtrack(open, close+1, curr + ")");
            }
        }

        backtrack(0, 0, "");

        return res;
    }
}
