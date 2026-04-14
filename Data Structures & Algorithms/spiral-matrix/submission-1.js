class Solution {
    /**
     * @param {number[][]} matrix
     * @return {number[]}
     */
    spiralOrder(matrix) {
        let res = [];
        let top = 0, left = 0;
        let bottom = matrix.length-1, right = matrix[0].length-1;

        while(top <= bottom && left <= right){
            // left to right
            for(let i=left; i<=right; i++){
                res.push(matrix[top][i]);
            }
            top++;

            // top to bottom
            for(let i=top; i<=bottom; i++){
                res.push(matrix[i][right]);
            }
            right--;

            // right to left
            if(top <= bottom){
                for(let i=right; i>=left; i--){
                    res.push(matrix[bottom][i]);
                }
                bottom--;
            }

            // bottom to top
            if(left <= right){
                for(let i=bottom; i>=top; i--){
                    res.push(matrix[i][left]);
                }
                left++;
            }
        }

        return res;
    }
}
