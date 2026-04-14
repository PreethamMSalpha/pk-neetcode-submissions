class Solution {
    /**
     * @param {number[]} gas
     * @param {number[]} cost
     * @return {number}
     */
    canCompleteCircuit(gas, cost) {
        let totalFuel = 0;
        let startGas = 0;
        let start = 0;


        for(let i=0; i<gas.length; i++){
            const diff = gas[i] - cost[i];

            totalFuel += diff;
            startGas += diff;

            if(startGas < 0){
                startGas = 0;
                start = i + 1;
            }
        }

        return totalFuel >= 0 ? start : -1;
    }
}
