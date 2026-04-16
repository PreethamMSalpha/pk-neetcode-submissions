class Solution {
    /**
     * @param {string} num1
     * @param {string} num2
     * @return {string}
     */
    multiply(num1, num2) {

        if(num1 == "0" || num2 == "0") return "0";

        let n1 = num1.split('').reverse();
        let n2 = num2.split('').reverse();

        let res = new Array(n1.length + n2.length).fill(0);

        for(let i=0; i<n1.length; i++){
            for(let j=0; j<n2.length; j++){
                const mul = (n1[i] - '0') * (n2[j] - '0');
                res[i+j] += mul;
                res[i+j+1] += Math.floor(res[i+j]/10); // carry
                res[i+j] = res[i+j] % 10;
            }
        }

        const ret = res.reverse();

        let i = 0;
        while(i < ret.length && ret[i] == 0){
            i++;
        }

        return ret.slice(i).join("");
    }
}
