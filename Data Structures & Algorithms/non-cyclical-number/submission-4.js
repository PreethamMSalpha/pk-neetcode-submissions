class Solution {
    /**
     * @param {number} n
     * @return {boolean}
     */
    isHappy(n) {
        function sumofdigits(num){
            let sum = 0;
            while(num > 0){
                let digit = num % 10; // last digit
                sum += digit * digit;
                num = Math.floor(num / 10);
            }
            return sum;
        }

        let slow = n;
        let fast = sumofdigits(n);

        while(fast != 1 && slow != fast){
            slow = sumofdigits(slow);
            fast = sumofdigits(sumofdigits(fast));
        }

        return fast === 1;
    }
}
