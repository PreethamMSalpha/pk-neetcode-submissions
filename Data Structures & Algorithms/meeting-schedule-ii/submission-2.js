/**
 * Definition of Interval:
 * class Interval {
 *   constructor(start, end) {
 *     this.start = start;
 *     this.end = end;
 *   }
 * }
 */

class MinHeap{
    constructor(){
        this.heap = [];
    }

    peek(){
        if(!this.heap.length) return null;

        return this.heap[0];
    }

    size(){
        return this.heap.length;
    }

    push(val){
        this.heap.push(val);
        this.heap.sort((a,b) => a-b);
        return;
    }

    pop(){
        return this.heap.shift();
    }
    
    print(){
        console.log(this.heap.toString())
    }
}

// [(0,40),(5,10),(15,20)]
// heap -> [40]

class Solution {
    /**
     * @param {Interval[]} intervals
     * @returns {number}
     */
    minMeetingRooms(intervals) {
        if(intervals.length <= 1) return intervals.length;

        intervals.sort((a,b) => a.start - b.start);

        let heap = new MinHeap();

        for(const interval of intervals){
            if(heap.size() && heap.peek() <= interval.start){
                heap.pop();
            }

            heap.push(interval.end)
        }

        return heap.size();
    }
}
