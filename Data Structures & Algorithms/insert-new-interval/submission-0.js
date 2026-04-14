class Solution {
    /**
     * @param {number[][]} intervals
     * @param {number[]} newInterval
     * @return {number[][]}
     */
    insert(intervals, newInterval) {
        let res = [];
        const n = intervals.length;

        let i = 0;
        // s1 -> existing -> newInterval
        while(i < n && intervals[i][1] < newInterval[0]){
            res.push(intervals[i]);
            i++;
        }
        // s2 -> overlapping
        while( i < n && intervals[i][0] <= newInterval[1]){
            newInterval[0] = Math.min(intervals[i][0], newInterval[0]);
            newInterval[1] = Math.max(intervals[i][1], newInterval[1]);
            i++;
        }
        res.push(newInterval);
        
        // s3 -> remaining after overlapping
        while(i < n){
            res.push(intervals[i]);
            i++;
        }

        return res;
    }
}
