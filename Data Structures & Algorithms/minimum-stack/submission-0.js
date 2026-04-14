class MinStack {
    constructor() {
        this.min = Infinity;
        this.stack = [];
    }

    /**
     * @param {number} val
     * @return {void}
     */
    push(val) {
        this.stack.push(val);
        this.min = Math.min(val, this.min);
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
        this.min = Math.min(...this.stack)
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
        return this.min;
    }
}
