/**
 * Definition of Interval:
 * class Interval {
 *   constructor(start, end) {
 *     this.start = start;
 *     this.end = end;
 *   }
 * }
 */

class Solution {
    /**
     * @param {Interval[]} intervals
     * @returns {boolean}
     */
    canAttendMeetings(intervals) {
        if(intervals.length <= 1) return true;

        
        // solution 1
        /*
        intervals.sort((a,b) => a.end - b.end);
        let prevEnd = intervals[0]['end'];

        for(let i=1; i<intervals.length; i++){
            let currStart = intervals[i]['start'];
            let currEnd = intervals[i]['end'];

            if(currStart < prevEnd){
                return false;
            }else{
                prevEnd = currEnd;
            }
        }
        */

        // solution 2
        intervals.sort((a,b) => a.start - b.start);

        for(let i=1; i<intervals.length; i++){
            if(intervals[i].start < intervals[i-1].end){
                return false;
            }
        }

        return true;
    }
}
