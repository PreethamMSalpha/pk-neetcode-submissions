class Solution {
    /**
     * @param {number[]} digits
     * @return {number[]}
     */
    plusOne(digits) {
        let res = digits.reduce((acc, curr) => acc + curr + '', 0);

        res = parseInt(res) + 1;

        let x = res.toString().split("")

        return x;
    }
}
