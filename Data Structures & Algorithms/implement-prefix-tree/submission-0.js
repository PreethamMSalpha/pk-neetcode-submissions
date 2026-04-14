class TrieNode{
    constructor(){
        this.children = {};
        this.isEnd = false;
    }
}

class PrefixTree {
    constructor() {
        this.root = new TrieNode();
    }

    /**
     * @param {string} word
     * @return {void}
     */
    insert(word) {
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
        let node = this.root;

        for(const ch of word){
            if(!node.children[ch]) return false;
            node = node.children[ch];
        }

        return node.isEnd;
    }

    /**
     * @param {string} prefix
     * @return {boolean}
     */
    startsWith(prefix) {
        let node = this.root;

        for(const ch of prefix){
            if(!node.children[ch]) return false;
            node = node.children[ch];
        }

        return true;
    }
}
