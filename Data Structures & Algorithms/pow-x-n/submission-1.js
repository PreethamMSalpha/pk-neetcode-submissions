class Solution {
    /**
     * @param {number} x
     * @param {number} n
     * @return {number}
     */
    myPow(x, n) {
        // return Math.pow(x, n)
        let res = 1

        if(n > 0){
            while(n > 0){
                res *= x;
                n--
            }
        }else if(n < 0){
            while(n < 0){
                res /= x;
                n++
            }
        }else{
            return n == 0 ? 1 : x;
        }

        return res;
    }
}
