class MedianFinder {
    constructor() {
        this.arr = [];
        this.small = new Heap((a,b) => b-a); //maxheap [5,4,3]
        this.large = new Heap((a,b) => a-b); //maxheap [1,2,3]
    }

    /**
     *
     * @param {number} num
     * @return {void}
     */
    addNum(num) {
        // always push to small
        this.small.insert(num);

        // move to large
        this.large.insert(this.small.extract());

        //rebalance
        if(this.large.size() > this.small.size()){
            this.small.insert(this.large.extract());
        }
    }

    /**
     * @return {number}
     */
    findMedian() {
         if(this.small.size() > this.large.size()) return this.small.peek();

         return (this.small.peek() + this.large.peek()) / 2;
    }
}

class Heap{
    constructor(comparator = (a,b) => a - b){
        this.heap = [];
        this.cmp = comparator;
    }

    size(){
        return this.heap.length;
    }

    isEmpty(){
        return !!(this.size() == 0);
    }

    peek(){
        if(this.isEmpty()) return null;
        return this.heap[0];
    }

    _parent(i){
        return Math.floor((i-1)/2);
    }

    _left(i){
        return (2*i+1);
    }

    _right(i){
        return (2*i+2);
    }

    _swap(a, b){
        return [this.heap[a], this.heap[b]] = [this.heap[b], this.heap[a]];
    }

    isHighestPriority(a,b){
        return this.cmp(this.heap[a], this.heap[b]) < 0;
    }

    insert(val){
        this.heap.push(val);
        this._bubbleUp(this.size() - 1);
        return this;
    }

    extract(){
        if(this.isEmpty()) return null;
        let top = this.heap[0];
        let last = this.heap.pop();
        if(!this.isEmpty()){
            this.heap[0] = last;
            this._bubbleDown(0);
        }
        return top;
    }

    _bubbleUp(i){
        while(i > 0){
            let p = this._parent(i);
            if(!this.isHighestPriority(i, p)) break;
            
            this._swap(i, p);
            i = p;
        }
    }

    _bubbleDown(i){
        const n = this.size();

        while(true){
            let target = i;
            let l = this._left(i);
            let r = this._right(i);

            if(l < n && this.isHighestPriority(l, target)) target = l;
            if(r < n && this.isHighestPriority(r, target)) target = r;

            if(target == i) break;

            this._swap(target, i);
            i = target;
        }
    }
}















