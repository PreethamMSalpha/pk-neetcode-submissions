class Solution {
    /**
     * @param {number[]} piles
     * @param {number} h
     * @return {number}
     */

    // 1, 2, 3, 4, 5, 6
    // it 1: mid = 3 -> can eat 3 bananas at a single time? we have to check

    minEatingSpeed(piles, h) {
        let low = 1;
        let high = Math.max(...piles);

        while(low < high){
            let mid = Math.floor((low+high)/2);

            if(this.canFinish(piles, mid, h)){ // mid works try slower
                high = mid;
            }else{ // try faster
                low = mid + 1;
            }
        }

        return low;
    }

    canFinish(piles, k, h){
        // k -> no of bananas can eat at a single time
        let totalHours = 0;
        for(const pile of piles){
            totalHours += Math.ceil(pile/k);
        }

        return totalHours <= h;
    }
}
