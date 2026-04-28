class Solution {
    /**
     * @param {string} s1
     * @param {string} s2
     * @param {string} s3
     * @return {boolean}
     */
    isInterleave(s1, s2, s3) {
        if(s1.length + s2.length != s3.length) return false;

        let map = new Map();
        function dfs(i, j){
            // base condition
            if(i == s1.length && j == s2.length) return true;

            const key = `${i}_${j}`;

            if(map.has(key)) return map.get(key);

            if(i < s1.length && s1[i] == s3[i+j] && dfs(i+1, j)){
                map.set(key, true);
                return true;
            } 

            if(j < s2.length && s2[j] == s3[i+j] && dfs(i, j+1)){
                map.set(key, true);
                return true;
            }

            map.set(key, false);
            return false;
        }

        return dfs(0, 0);
    }
}
