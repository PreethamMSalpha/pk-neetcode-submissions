class Solution {
    /**
     * @param {string[]} tokens
     * @return {number}
     */
    evalRPN(tokens) {
        let stack = [];
        let expression

        for(let token of tokens){
            // console.log(token)
            if(['+', '-', '*', '/'].includes(token)){
                let b = parseInt(stack.pop());
                let a = parseInt(stack.pop());

                let res;

                if(token == '+') res = a + b;
                else if(token == '*') res = a * b;
                else if(token == '-') res = a - b;
                else if (token == '/') res = Math.trunc(a/b);

                stack.push(res);
            }else{
                stack.push(token)
            }
        }

        return stack[0];
    }
}
