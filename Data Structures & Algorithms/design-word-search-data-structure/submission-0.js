class TrieNode{
    constructor(){
        this.children = {};
        this.isEnd = false;
    }
}
class WordDictionary {
    constructor() {
        this.root = new TrieNode();
    }

    /**
     * @param {string} word
     * @return {void}
     */
    addWord(word) {
        let node = this.root;

        for(const ch of word){
            if(!node.children[ch]){
                node.children[ch] = new TrieNode();
            }
            node = node.children[ch];
        }

        node.isEnd = true;
    }

    /**
     * @param {string} word
     * @return {boolean}
     */
    search(word) {
        // let node = this.root;

        // for(const ch of word){
        //     if(ch == '.') continue;
        //     if(!node.children[ch]) return false;

        //     node = node.children[ch];
        // }

        // return node.isEnd;
        return this.dfs(word, 0, this.root);
    }

    dfs(word, index, node){
        // base condition
        if(index == word.length) return node.isEnd;

        const ch = word[index];

        if(ch == '.'){
            // get all the children
            for(const child of Object.values(node.children)){
                if(this.dfs(word, index+1, child)) return true;
            }
            return false;
        }else{
            if(!node.children[ch]) return false;
            return this.dfs(word, index + 1, node.children[ch]);
        }
    }
}
