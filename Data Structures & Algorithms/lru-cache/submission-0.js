// data structure
// head <-> MRU ..... <-> LRU <-> tail

class LinkedList{
    constructor(key, val){
        this.key = key;
        this.val = val;
        this.next = null;
        this.prev = null;
    }
}

class LRUCache {
    /**
     * @param {number} capacity
     */
    constructor(capacity) {
        this.capacity = capacity;
        this.map = new Map();
        this.head = new LinkedList(0, 0);
        this.tail = new LinkedList(0, 0);

        // link head and tail
        this.head.next = this.tail;
        this.tail.prev = this.head;
    }

    remove(node){
        node.next.prev = node.prev;
        node.prev.next = node.next;
    }

    insertAtFirst(node){
        // consider right part of node
        node.next = this.head.next;
        this.head.next.prev = node;

        // consider left part of node
        this.head.next = node;
        node.prev = this.head;
    }

    /**
     * @param {number} key
     * @return {number}
     */
    get(key) {
        if(!this.map.has(key)) return -1;

        const node = this.map.get(key);

        // remove this node
        this.remove(node);
        // add to front
        this.insertAtFirst(node);

        return node.val;
    }

    /**
     * @param {number} key
     * @param {number} value
     * @return {void}
     */
    put(key, value) {
        if(this.map.has(key)){
            // remove the node
            this.remove(this.map.get(key));
        }

        const newNode = new LinkedList(key, value)
        this.map.set(key, newNode);

        this.insertAtFirst(newNode);

        if(this.map.size > this.capacity){
            const lru = this.tail.prev;
            this.remove(this.map.get(lru.key));
            this.map.delete(lru.key);
        }
    }
}
