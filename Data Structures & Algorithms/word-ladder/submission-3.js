class Solution {
    /**
     * @param {string} beginWord
     * @param {string} endWord
     * @param {string[]} wordList
     * @return {number}
     */
    ladderLength(beginWord, endWord, wordList) {
        if(!wordList.includes(endWord)) return 0;

        let patternMap = {};

        // step1:- build patternMap
        for(const word of [...wordList, beginWord]){
            for(let i=0; i<word.length; i++){
                let pattern = word.slice(0, i) + '*' + word.slice(i+1);
                if(!patternMap[pattern]) patternMap[pattern] = [];
                patternMap[pattern].push(word);
            }
        }

        // bfs
        const visited = new Set([beginWord]);
        let levels = 1;
        let queue = [beginWord];

        while(queue.length){
            let size = queue.length;

            for(let i=0; i<size; i++){ // each level processing
                let word = queue.shift();

                if(word == endWord) return levels;

                for(let j=0; j<word.length; j++){
                    let pattern = word.slice(0, j) + '*' + word.slice(j+1);

                    for(const neigh of patternMap[pattern] || []){
                        if(!visited.has(neigh)){
                            visited.add(neigh);
                            queue.push(neigh);
                        }
                    }

                    patternMap[pattern] = []; // clear the pattern as it is visited or already add to queue
                }
            }

            levels++;
        
        }

        return 0;
    }
}
