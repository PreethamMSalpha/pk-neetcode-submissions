class MedianFinder {
    constructor() {
        this.arr = []
    }

    /**
     *
     * @param {number} num
     * @return {void}
     */
    addNum(num) {
        this.arr.push(num);
    }

    /**
     * @return {number}
     */
    findMedian() {
        let arr = this.arr.sort((a,b) => a-b);

        let len = arr.length;
        let mid = Math.floor(len / 2);
        if(len % 2 == 0){
            return (this.arr[mid-1] + this.arr[mid])/2;
        }else{
            return this.arr[mid]
        }   
    }
}
