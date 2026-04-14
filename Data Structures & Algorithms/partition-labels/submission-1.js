class Solution {
    /**
     * @param {string} S
     * @return {number[]}
     */
    partitionLabels(S) {
        let lastIndex = {}; // store the last index

        for(let i=0; i<S.length; i++){
            lastIndex[S[i]] = i;
        }

        let end = 0;
        let res = [];
        let count = 0;

        for(let i=0; i<S.length; i++){
            const char = S[i];
            count++;
            end = Math.max(end, lastIndex[char]);

            if(i == end){
                res.push(count);
                count = 0;
            }
        }

        return res;
    }
}
