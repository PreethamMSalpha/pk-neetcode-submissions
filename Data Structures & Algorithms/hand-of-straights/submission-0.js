class Solution {
    /**
     * @param {number[]} hand
     * @param {number} groupSize
     * @return {boolean}
     */
    isNStraightHand(hand, groupSize) {
        // base condition
        if((hand.length % groupSize) != 0) return false;

        let freqMap = new Map();

        for(const num of hand){
            freqMap.set(num, (freqMap.get(num) || 0) + 1);
        }

        const sortedKeys = [...freqMap.keys()].sort((a,b) => a-b);

        for(const val of sortedKeys){
            let freq = freqMap.get(val)

            if( freq > 0 ){
                for(let i=0; i<groupSize; i++){
                    const curr = val + i;

                    if((freqMap.get(curr) || 0) < freq) return false;

                    freqMap.set(curr, freqMap.get(curr) - freq);
                }

                console.log(freqMap)
            }
        }

        return true;
    }
}
