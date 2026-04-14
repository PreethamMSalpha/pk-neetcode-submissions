class Solution {
    /**
     * @param {number[][]} points
     * @param {number} k
     * @return {number[][]}
     */
    kClosest(points, k) {
        let heap = new Heap((a,b) => b[0]-a[0]); // val, [x,y]

        for(const [x,y] of points){
            const val = Math.pow(x, 2) + Math.pow(y, 2)
            heap.push([val, [x,y]])
        }

        while(heap.size() > k){
            heap.extract();
        }

        return heap.getAll().map(coord => coord[1]);
    }
}

class Heap{
    constructor(comparator){
        this.heap = [];
        this.cmp = comparator;
    }

    size(){return this.heap.length}

    push(val){
        this.heap.push(val);
        this.heap.sort(this.cmp);
    }

    extract(){
        if(!this.size()) return null;

        let top = this.heap.shift();

        if(this.size()){
            this.heap.sort(this.cmp);
        }

        return top;
    }

    getAll(){
        return this.heap;
    }
}
