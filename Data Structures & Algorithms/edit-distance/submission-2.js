class Solution {
    /**
     * @param {string} word1
     * @param {string} word2
     * @return {number}
     */
    minDistance(word1, word2) {
        const m = word1.length, n = word2.length;

        let old = new Array(n+1).fill(0);

        for(let j=0; j<=n; j++) old[j] = j;


        for(let i=1; i<=m; i++){
            const newArr = new Array(n+1).fill(0);
            newArr[0] = i;

            for(let j=1; j<=n; j++){
                if(word1[i-1] == word2[j-1]){
                    newArr[j] = old[j-1];
                }else{
                    newArr[j] = 1 + Math.min(newArr[j-1], old[j-1], old[j])
                }
            }

            old = newArr
        }

        return old[n];
    }
}
