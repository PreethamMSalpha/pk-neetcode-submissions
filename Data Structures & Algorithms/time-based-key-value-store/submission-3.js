class TimeMap {
    constructor() {
        this.keyStore = new Map();
    }

    /**
     * @param {string} key
     * @param {string} value
     * @param {number} timestamp
     * @return {void}
     */
    set(key, value, timestamp) {
        if(!this.keyStore.has(key)){
            this.keyStore.set(key, [])
        }
        this.keyStore.get(key).push([timestamp, value]);
    }

    /**
     * @param {string} key
     * @param {number} timestamp
     * @return {string}
     */
    get(key, timestamp) {
        let val = this.keyStore.get(key) || [];

        let lo = 0
        let hi = val.length - 1;
        let res = "";

        while(lo <= hi){
            let mid = Math.floor((lo+hi)/2);

            if(val[mid][0] == timestamp) return val[mid][1];

            if(val[mid][0] <= timestamp){ // search right
                lo = mid + 1;
                res = val[mid][1];
            }else{
                hi = mid - 1;
            }
        }

        return res;
    }
}
