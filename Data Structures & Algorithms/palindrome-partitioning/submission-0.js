class Solution {
    /**
     * @param {string} s
     * @return {string[][]}
     */
    partition(s) {
        let res = [];
        const isPali = this.isPali;

        function backtrack(start, curr){
            //base condition
            if(start == s.length){
                return res.push([...curr]);
            }

            for(let i=start; i<s.length; i++){
                if(isPali(s, start, i)){
                    // choose
                    curr.push(s.slice(start, i+1));

                    // backtrack
                    backtrack(i+1, curr);

                    // unchoose
                    curr.pop();
                }
            }
        }

        backtrack(0, [])

        return res;
    }

    isPali(s, l, r){
        while(l <= r){
            if(s[l] != s[r]) return false;
            l++, r--;
        }

        return true;
    }
}
