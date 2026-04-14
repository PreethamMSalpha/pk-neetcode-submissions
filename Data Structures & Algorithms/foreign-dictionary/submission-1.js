class Solution {
    /**
     * @param {string[]} words
     * @returns {string}
     */
    foreignDictionary(words) {
        // build adjacency list
        let graph = {};
        for(const word of words){
            for(const ch of word){
                if(!graph[ch]) graph[ch] = new Set();
            }
        }

        // get the character and append to graph
        for(let i=0 ;i<words.length - 1; i++){
            const w1 = words[i];
            const w2 = words[i+1];

            // w2 is prefix of w1 return ""
            if(w1.length > w2.length && w1.startsWith(w2)) return "";

            // get the minLen of w1 and w2
            const minLen = Math.min(w1.length, w2.length);

            for(let j=0; j<minLen; j++){
                if(w1[j] != w2[j]){
                    graph[w1[j]].add(w2[j]);
                    break; // we will consider only one char
                }
            }
        }
        // console.log(graph)

        // topological sort and get result in reverse order
        let res = [];

        // maintain state for each character
        // 0 = unvisited, 1 = visiting, 2 = visited
        let state = {};
        for(const ch of Object.keys(graph)) state[ch] = 0;
        // console.log(state)

        function dfs(ch){
            // cycle detection
            if(state[ch] == 1) return false;

            // if visited return true;
            if(state[ch] == 2) return true;

            // mark current state as visiting
            state[ch] = 1;

            // explore all the children of ch
            for(const child of graph[ch]){
                if(!dfs(child)) return false;
            }

            // mark as visited
            state[ch] = 2;
            // append to result
            res.push(ch);

            return true;
        }

        for(const ch of Object.keys(graph)){
            if(!dfs(ch)) return "";
        }

        return res.reverse().join("");
    }
}
