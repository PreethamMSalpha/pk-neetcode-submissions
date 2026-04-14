class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number}
     */

    /*
    Optimized -> O(n log k) TIME -> O(k) SPACE
    */
    findKthLargest(nums, k) {
        let minHeap = new Heap((a,b) => a-b);

        for(const num of nums){
            minHeap.insert(num);

            if(minHeap.size() > k){
                minHeap.extract()
            }
        }

        return minHeap.peek();
    }
}

class Heap{
    constructor(comparator){
        this.heap = [];
        this.cmp = comparator;
    }

    // sip
    size(){return this.heap.length;}

    isEmpty(){
        return this.size() == 0;
    }

    peek(){
        if(this.isEmpty()) return null;

        return this.heap[0];
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

    insert(val){
        this.heap.push(val);
        this.bubbleUp(this.size() - 1);
        return this;
    }

    extract(){
        if(!this.size()) return null;
        let top = this.heap[0];
        let last = this.heap.pop();

        if(this.size()){
            this.heap[0] = last;
            this.bubbleDown(0);
        }

        return top;
    }

    bubbleUp(i){
        while(i > 0){
            let p = this.parent(i);

            if(!this.hasHighestPriority(i, p)) return;

            this.swap(i, p);
            i = p;
        }
    }

    bubbleDown(i){
        const n = this.size();

        while(true){
            let target = i;
            let l = this.leftChild(i);
            let r = this.rightChild(i);

            if(l < n && this.hasHighestPriority(l, target)) target = l;
            if(r < n && this.hasHighestPriority(r, target)) target = r;

            if(target == i) return;

            this.swap(i, target);
            i = target;
        }
    }

    heapify(nums){
        this.heap = nums.slice();
        for(let i=Math.floor(nums.length/2) - 1; i>=0; i--){
            this.bubbleDown(i);
        }
    }
}
