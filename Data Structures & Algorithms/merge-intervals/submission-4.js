class Solution {
    /**
     * @param {number[][]} intervals
     * @return {number[][]}
     */
    merge(intervals) {
        if(intervals.length == 1) return intervals;

        intervals.sort((a,b) => a[0] - b[0]);

        let res = [intervals[0]];

        for(let i=1; i<intervals.length; i++){
            let current = intervals[i];
            let previous = res[res.length - 1];

            // if overlapping - merge
            if(current[0] <= previous[1]){
                // why not 0th index coz we sorted by 1st element so previous[0] always less than current[0]
                previous[1] = Math.max(current[1], previous[1]);
            }else{// else append
                res.push(current);
            }
            
        }

        return res;
    }
}
