class TrieNode{
    constructor(){
        this.children = {};
        this.word = null;
    }
}
class Solution {
    /**
     * @param {character[][]} board
     * @param {string[]} words
     * @return {string[]}
     */
    findWords(board, words) {
        
        let root = new TrieNode();

        // add the words to trie
        for(const word of words){
            let node = root;
            for(const ch of word){
                if(!node.children[ch]){
                    node.children[ch] = new TrieNode();
                }
                node = node.children[ch];
            }
            node.word = word; // storing complete word here
        }


        const rows = board.length;
        const cols = board[0].length;
        let res = [];

        function dfs(r, c, node){
            // base conditions

            // not out of bounds
            if(r >= rows || c >= cols || r < 0 || c < 0) return;

            // not visited
            if(board[r][c] == '#') return;

            const ch = board[r][c];

            // no children
            if(!node.children[ch]) return;

            // get new node
            node = node.children[ch];

            // check word exists
            if(node.word){
                res.push(node.word);
                node.word = null; // to avoid duplicate
            }
            
            // mark visited
            board[r][c] = '#'; 

            // do the dfs
            dfs(r - 1, c, node);
            dfs(r + 1, c, node);
            dfs(r, c - 1, node);
            dfs(r, c + 1, node);

            // mark unvisited
            board[r][c] = ch;
        }



        // iterate over matrix
        for(let r = 0; r<rows; r++){
            for(let c = 0; c<cols; c++){
                dfs(r, c, root);
            }
        }

        return res;
    }

}
