class Solution {
    /**
     * @param {number[][]} intervals
     * @return {number}
     */
    eraseOverlapIntervals(intervals) {
        if(intervals.length == 0) return intervals;

        intervals.sort((a,b) => a[1]-b[1]);

        let prevHighest = intervals[0][1];
        let count = 0; // skips required

        for(let i=1; i<intervals.length; i++){
            const curr = intervals[i]
            if(curr[0] < prevHighest){ // found overlap
                count++;
            }else{
                prevHighest = curr[1];
            }
        }

        return count;
    }
}
