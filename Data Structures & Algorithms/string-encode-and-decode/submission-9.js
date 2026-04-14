class Solution {
    /**
     * @param {string[]} strs
     * @returns {string}
     */
    encode(strs) {
        let enc = ''

        for(const str of strs){
            enc += str.length + '#' + str;
        }

        // console.log('enc -> ', enc)

        return enc;
    }

    /**
     * @param {string} str
     * @returns {string[]}
     */

    // 5#Hello5#World
    decode(str) {
        let res = [];

        let i = 0;

        while(i < str.length){
            let j = i;

            while(j < str.length && str[j] != '#'){
                j++;
            }

            // console.log('j value -> ', str[j])

            if(j >= str.length) break;

            let word_len = parseInt(str.slice(i, j));
            // console.log('word_len -> ', word_len)
            let word = str.slice(j+1, j+1 + word_len);
            // console.log('word -> ', word);

            res.push(word);
            i = j+1 + word_len
            // console.log('i -> ', str[i])
        }

        return res;
    }
}
