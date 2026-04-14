class Solution {
    /**
     * @param {number[][]} intervals
     * @param {number[]} queries
     * @return {number[]}
     */
    minInterval(intervals, queries) {
        // sort intervals by start-time
        // sort queries by preserving its idx
        // fill res[] with -1
        // use minHeap for min-interval

        let sortedIntervals = intervals.sort((a,b) => a[0]-b[0]);

        let sortedQueries = queries
                                .map((query, idx) => [query, idx])
                                .sort((a,b) => a[0] - b[0]);


        let res = new Array(queries.length).fill(-1);

        let minheap = new Heap((a,b) => a[0] - b[0]) 
        // storing [minIntervalLength, rightInterval]

        let intIdx = 0;

        for(const [query, idx] of sortedQueries){
            // if the startInterval <= query -> add to minheap
            while(intIdx < sortedIntervals.length && sortedIntervals[intIdx][0] <= query){
                const [leftInterval, rightInterval] = sortedIntervals[intIdx];
                // calculate interval length and then push
                const intervalLen = rightInterval - leftInterval + 1;
                minheap.push([intervalLen, rightInterval]);
                intIdx++;
            }

            // if the endInterval < query -> pop from minheap
            while(minheap.size() && (minheap.peek()[1] < query)){
                minheap.pop();
            }
            
            // if the minHeap.size() exists -> take the top val
            if(minheap.size() > 0){
                res[idx] = minheap.peek()[0];
            }
        }

        return res;
    }
}

class Heap{
    constructor(comparator){
        this.heap = [];
        this.cmp = comparator;
    }

    push(val){
        this.heap.push(val);
        this.heap.sort(this.cmp);
        return this;
    }

    peek(){
        return this.size() ? this.heap[0] : null;
    }

    size(){
        return this.heap.length;
    }

    pop(){
        if(!this.size()) return null;
        let top = this.heap.shift();

        if(this.size()){
            this.heap.sort(this.cmp);
        }

        return top;
    }
}
