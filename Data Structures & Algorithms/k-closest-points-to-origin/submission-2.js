class Solution {
    /**
     * @param {number[][]} points
     * @param {number} k
     * @return {number[][]}
     */

    /*
        Distance from origin (0,0) to point (x,y):

        d = √(x² + y²)

        point [3,3]:  d = √(9+9)  = √18 = 4.24
        point [-2,2]: d = √(4+4)  = √8  = 2.83
        point [5,-1]: d = √(25+1) = √26 = 5.09
    */

    /* POINTS TO NOTE DOWN
        b[0] - a[0] sorts descending by distance, so the largest distance sits at heap[0]. When you extract() (which shifts from the front), you're removing the farthest point. After trimming to size k, the k closest points remain.
        If you used a[0] - b[0] (min-heap), you'd be extracting the closest points — the opposite of what you want.
    */

    kClosest(points, k) {
        let heap = new Heap((a,b) => b[0]-a[0]); // distance, [x,y]

        for(const [x,y] of points){
            //since you're only comparing distances (not using actual values), 
            // skipping the square root is the right call, which you're already doing.
            const distance = x*x + y*y;
            heap.push([distance, [x,y]])
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
