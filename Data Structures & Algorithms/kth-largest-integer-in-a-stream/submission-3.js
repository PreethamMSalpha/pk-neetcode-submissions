class KthLargest {
    /**
     * @param {number} k
     * @param {number[]} nums
     */
    constructor(k, nums) {
        this.k = k;
        this.heap = new Heap((a,b) => a - b);

        this.heap.heapify(nums);

        while(this.heap.size() > this.k){
            this.heap.extract();
        }
    }

    /**
     * @param {number} val
     * @return {number}
     */
    add(val) {
        this.heap.insert(val);

        while(this.heap.size() > this.k){
            this.heap.extract();
        }

        return this.heap.peek();
    }
}

class Heap{
    constructor(comparator = (a, b) => (a - b)){
        this.heap = [];
        this.cmp = comparator;
    }

    size(){
        return this.heap.length;
    }

    isEmpty(){
        return this.size() == 0;
    }

    peek(){
        return this.size() ? this.heap[0] : null;
    }

    insert(val){
        this.heap.push(val);
        this.bubbleUp(this.size() - 1)
        return this;
    }

    extract(){
        if(this.isEmpty()) return null;
        let top = this.heap[0];
        let last = this.heap.pop();

        if(!this.isEmpty()){
            this.heap[0] = last;
            this.bubbleDown(0);
        }

        return top;
    }

    parent(i){
        return Math.floor((i-1)/2);
    }

    leftChild(i){
        return (2*i) + 1;
    }

    rightChild(i){
        return (2*i) + 2;
    }

    swap(i, j){
        [this.heap[i], this.heap[j]] = [this.heap[j], this.heap[i]];
    }

    hasHighestPriority(i, j){
        return this.cmp(this.heap[i], this.heap[j]) < 0;
    }

    bubbleUp(i){
        while(i > 0){
            let p = this.parent(i);
            if(!this.hasHighestPriority(i, p)) break;
            this.swap(i, p);
            i = p;
        }
    }

    bubbleDown(i){
        let n = this.size();
        while(true){
            let target = i;
            let l = this.leftChild(i);
            let r = this.rightChild(i);

            if(l < n && this.hasHighestPriority(l, target)) target = l;
            if(r < n && this.hasHighestPriority(r, target)) target = r;

            if(target == i) break;
            this.swap(i, target);
            i = target;
        }

        return this.peek();
    }

    heapify(nums){
        let n = nums.length;
        this.heap = nums.slice();

        for(let i=Math.floor(n/2) - 1; i>=0; i--){
            this.bubbleDown(i);
        }

        return this;
    }
}
