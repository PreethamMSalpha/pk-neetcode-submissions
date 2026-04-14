class Solution {
    /**
     * @param {character[]} tasks
     * @param {number} n
     * @return {number}
     */
    leastInterval(tasks, n) {
        let time = 0;
        let heap = new Heap((a,b) => b-a);
        let queue = []; // [availableFreq, availableAtTime]
        let freq = {};

        for(const task of tasks){
            freq[task] = (freq[task] || 0 ) + 1;
        }

        for(const val of Object.values(freq)){
            heap.push(val);
        }

        while(heap.size() || queue.length){
            time++;

            if(heap.size()){
                let count = heap.pop();

                if(count - 1 > 0){
                    queue.push([count - 1, time + n])
                }
            }else{
                // heap is empty
                // we have to the availableTime as next time
                time = queue[0][1];
            }

            if(queue.length && queue[0][1] == time){
                heap.push(queue.shift()[0]);
            }
        }

        return time;
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

    size(){
        return this.heap.length;
    }

    print(){
        return this.heap.toString()
    }

    pop(){
        if(!this.heap.length) return null;
        let top = this.heap.shift();
        if(this.heap.length){
            this.heap.sort(this.cmp);
        }
        return top;
    }
}