class Solution {
    /**
     * @param {number} a
     * @param {number} b
     * @return {number}
     */
    getSum(a, b) {
        while(b !== 0){
            const carry = (a & b) << 1;
            const sum = a ^ b;

            a = sum;
            b = carry;
        }

        return a | 0;
    }
}
