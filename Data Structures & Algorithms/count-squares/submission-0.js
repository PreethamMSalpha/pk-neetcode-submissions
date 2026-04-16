class CountSquares {
    constructor() {
        this.map = new Map();
        this.points = [];
    }

    /**
     * @param {number[]} point
     * @return {void}
     */
    add(point) {
        this.points.push(point);
        const key = point[0] + '_' + point[1];
        this.map.set(key, (this.map.get(key) || 0) + 1);
    }

    /**
     * @param {number[]} point
     * @return {number}
     */
    count(point) {
        let res = 0;

        const [px, py] = point;

        for(const [x,y] of this.points){
            // it shouldn't be same point
            // height should be same
            if(Math.abs(py-y) != Math.abs(px-x) || (px == x || py == y) ){
                continue;
            }

            const c1 = this.map.get(x+'_'+py) || 0;
            const c2 = this.map.get(px+'_'+y) || 0;

            res += c1 * c2;
        }

        return res;
    }
}
