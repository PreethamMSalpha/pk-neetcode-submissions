class Solution {
    /**
     * @param {string} S
     * @return {number[]}
     */
    partitionLabels(S) {
        const freq = {};

        for(let i=0; i<S.length; i++){
            freq[S[i]] = (freq[S[i]] || 0) + 1;
        }

        let visited = new Set();
        let res = [];
        let temp = "";

        for(let i=0; i<S.length; i++){
            let char = S[i];
            temp += char;

            console.log(temp, freq)

            let charFreq = freq[char];

            if(!visited.has(char)){
                visited.add(char)
            }
            freq[char]--;
            console.log('freq after dec -> ', freq);
            console.log('visted set -> ', visited);

            if(freq[char] == 0){
                visited.delete(char);
            }

            if(!visited.size){
                res.push(temp.length);
                temp = "";
            }
        }

        return res;
    }
}
