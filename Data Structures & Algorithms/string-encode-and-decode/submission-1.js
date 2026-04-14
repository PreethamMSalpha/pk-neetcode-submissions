class Solution {
    /**
     * @param {string[]} strs
     * @returns {string}
     */
    encode(strs) {
        if(!strs) return null;

        let formatted_string = strs.map(str => `${str.length}#${str}`);

        let encoded_string = formatted_string.join('');

        return encoded_string;
    }

    /**
     * @param {string} str
     * @returns {string[]}
     */
    decode(str) {
        if(!str) return [];

        let i=0;
        let res = [];

        while(i < str.length){
            let j = i;

            while(str[j] !== '#'){
                j++;
            }

            let len = parseInt(str.substring(i, j), 10);
            i = j + 1;
            j = i + len;

            let word = str.substring(i, j);
            res.push(word);

            i = j;
        }

        return res;
    }
}
