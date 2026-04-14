class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isValid(s) {
        if(s.length % 2 != 0) return false;  // valid parenthesis should be of even length;

        let stack = [];

        let map = {
            '}' : '{',
            ']' : '[',
            ')' : '('
        }

        for(let ch of s){
            if(map[ch]){ // closing bracket check
                if(stack.pop() != map[ch]) return false;
            }else{
                stack.push(ch);
            }
        }

        return stack.length ? false : true;
    }
}
