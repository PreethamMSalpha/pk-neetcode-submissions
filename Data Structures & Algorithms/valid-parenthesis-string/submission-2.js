class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    checkValidString(s) {
        let leftStack = [];
        let starStack = [];

        for( let i=0; i<s.length; i++){
            const char = s[i];

            if(char == '('){
                leftStack.push(i);
            }else if(char == '*'){
                starStack.push(i);
            }else{
                if(leftStack.length){
                    leftStack.pop();
                }else if(starStack.length){
                    starStack.pop();
                }else{
                    return false;
                }
            }
        }

        while(leftStack.length && starStack.length){
            if(leftStack.pop() > starStack.pop()) return false;
        }

        return leftStack.length === 0;
    }
}
