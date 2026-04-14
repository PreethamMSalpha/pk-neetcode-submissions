class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s, t) {
        if(s.length != t.length) return false;

        let map = new Map();

        for(let i=0; i<s.length; i++){
            if(!map.get(s[i])) map.set(s[i], 0)

            map.set(s[i], map.get(s[i])+1)
        }

        for(let j=0; j<t.length; j++){
            if(!map.get(t[j])) return false;

            const val = map.get(t[j])

            if(val == 0) return false

            map.set(t[j], val - 1)
        }

        return true;
    }
}
