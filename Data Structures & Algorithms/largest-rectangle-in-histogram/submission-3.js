class Solution {
    /**
     * @param {number[]} heights
     * @return {number}
     */
    largestRectangleArea(heights) {
        if(heights.length == 1) return heights[0];

        let maxArea = 0;
        let len = heights.length;
        let stack = []; // monotonic increasing stack
        // in stack we store only index (not value)

        for(let i=0; i<=len; i++){
            const currentHeight = (i == len) ? 0 : heights[i];

            while(stack.length && heights[stack[stack.length - 1]] > currentHeight){
                const height = heights[stack.pop()];
                const width = (
                    stack.length == 0 
                    ? i 
                    :  (i - stack[stack.length - 1] - 1)
                );
                maxArea = Math.max(maxArea, height * width);
            }

            stack.push(i);
        }

        return maxArea;
    }
}
