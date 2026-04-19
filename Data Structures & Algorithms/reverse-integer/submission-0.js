class Solution {
    /**
     * @param {number} x
     * @return {number}
     */
    reverse(x) {
        const MIN = -2147483648; // -2^31
        const MAX = 2147483647; // 2^31 - 1

        let result = 0;

        while(x !== 0){
            const digit = x % 10;
            x = Math.trunc(x / 10);

            if(result > Math.trunc(MAX / 10) || 
                (result == Math.trunc(MAX / 10) && digit > 7)) return 0;
            if(result < Math.trunc(MIN / 10) || 
                (result == Math.trunc(MIN / 10) && digit < -8)) return 0;

            result = result * 10 + digit;
        }

        return result;
    }
}
