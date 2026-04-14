class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isValid(s) {
        if(s.length == 1) return false;
        let res = [];

        for(let ch of s){
            if(ch == '(' || ch == '{' || ch == '['){
                res.push(ch);
            }else{
                if(!res.length) return false
                let ele = res.pop();

                if(ele == '(' && ch != ')' || ele == '[' && ch != ']' || ele == '{' && ch != '}'){
                    return false;
                }
            }
        }

        return res.length ? false : true;
    }
}
