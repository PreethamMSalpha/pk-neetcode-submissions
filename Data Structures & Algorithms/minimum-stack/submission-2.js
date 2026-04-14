class MinStack {
    constructor() {
        this.min = [];
        this.stack = [];
    }

    /**
     * @param {number} val
     * @return {void}
     */
    push(val) {
        this.stack.push(val);
        if(this.min.length == 0) this.min.push(val)
        else{
            let minVal = Math.min(val, this.min[this.min.length - 1]);
            this.min.push(minVal);
        }
    }

    size(){
        return this.stack.length;
    }

    /**
     * @return {void}
     */
    pop() {
        if(!this.size()) return null;
        this.stack.pop();
        this.min.pop();
    }

    /**
     * @return {number}
     */
    top() {
        if(!this.size()) return null;
        return this.stack[this.size() - 1];
    }

    /**
     * @return {number}
     */
    getMin() {
        if(!this.min.length) return null;
        return this.min[this.min.length - 1];
    }
}
