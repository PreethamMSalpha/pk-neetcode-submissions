class Solution {
    /**
     * @param {number[][]} triplets
     * @param {number[]} target
     * @return {boolean}
     */
    mergeTriplets(triplets, target) {
        let [x,y,z] = target;

        let res = [0,0,0];

        for(const [a,b,c] of triplets){
            // skip max value to avoid over=shoot

            if((a > x) || (b > y) || (c > z)) continue;

            res[0] = Math.max(res[0], a);
            res[1] = Math.max(res[1], b);
            res[2] = Math.max(res[2], c);
        }

        return (res[0] === x && res[1] === y && res[2] === z);
    }
}
