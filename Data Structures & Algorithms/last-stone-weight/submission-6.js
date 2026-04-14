class Solution {
    /**
     * @param {number[]} stones
     * @return {number}
     */
    lastStoneWeight(stones) {
        if(!stones.length) return 0;
        if(stones.length == 1) return stones[0];

        let heap = new Heap((a,b) => b-a);
        heap.heapfiy(stones);

        while(heap.size() > 1){
            let first = heap.extract();
            let next = heap.extract();

            if(first != next){
                heap.insert(first - next);
            }
        }

        return heap.size() ? heap.peek() : 0
    }
}

class Heap{
    constructor(comparator){
        this.heap = [];
        this.cmp = comparator;
    }

    heapArr(){
        return this.heap;
    }

    heapfiy(arr){
        this.heap.push(...arr);
        this.heap.sort(this.cmp);
        return this;
    }

    insert(val){
        this.heap.push(val);
        this.heap.sort(this.cmp);
    }

    size(){
        return this.heap.length;
    }

    extract(){
        if(!this.size()) return null;
        let top = this.heap.shift();

        if(this.size()){
            this.heap.sort(this.cmp)
        }

        return top;
    }

    peek(){
        return this.size() ? this.heap[0] : 0
    }
}