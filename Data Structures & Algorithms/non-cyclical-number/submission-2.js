class Solution {
    /**
     * @param {number} n
     * @return {boolean}
     */
    isHappy(n) {
        function sumofdigits(num){
            let sum = 0;
            while(num > 0){
                let digit = num % 10;
                sum += (digit * digit);
                num = Math.floor(num/10);
            }
            console.log(sum)
            return sum;
        }

        let visited = new Set();
        while(n != 1){
            if(visited.has(n)) return false; // loop found
            visited.add(n);
            let num = sumofdigits(n);
            n = num;
        }

        return true;
    }
}
