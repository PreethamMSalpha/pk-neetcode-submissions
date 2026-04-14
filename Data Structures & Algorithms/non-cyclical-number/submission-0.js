class Solution {
    /**
     * @param {number} n
     * @return {boolean}
     */
    isHappy(n) {
        let seen = new Set();

        function sumOfDigits(num){
            let sum = 0;
            while(num > 0){
                let digit = num % 10; // last digit
                sum += digit * digit;
                num = Math.floor(num / 10);
            }
            return sum;
        }


        while(n != 1){
            if(seen.has(n)) return false; // cycle
            seen.add(n);
            n = sumOfDigits(n);
        }

        return true;
    }
}
