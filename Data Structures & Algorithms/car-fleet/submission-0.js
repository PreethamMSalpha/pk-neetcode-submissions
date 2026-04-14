class Solution {
    /**
     * @param {number} target
     * @param {number[]} position
     * @param {number[]} speed
     * @return {number}
     */
    carFleet(target, position, speed) {
        let res = [];
        const cars = position
                        .map((pos, idx) => [pos, speed[idx]])
                        .sort((a,b) => b[0] - a[0]); // sort by decreasing order of position which is close to target

        for(const [pos, speed] of cars){
            const time = (target - pos)/speed; // velocity = displacement / time formula
            if(res.length == 0 || time > res[res.length - 1]){
                res.push(time);
            }
        }

        return res.length;
    }
}
