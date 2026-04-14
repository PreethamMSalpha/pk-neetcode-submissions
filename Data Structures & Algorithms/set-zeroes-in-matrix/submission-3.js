class Solution {
    /**
     * @param {number[][]} matrix
     * @return {void}
     */

    /*
    setZeroes(matrix) {
        const rows = matrix.length;
        const cols = matrix[0].length;

        const zero_rows = new Set();
        const zero_cols = new Set();

        for(let r=0; r<rows; r++){
            for(let c=0; c<cols; c++){
                if(matrix[r][c] == 0){
                    zero_rows.add(r);
                    zero_cols.add(c)
                }
            }
        }

        for(let r=0; r<rows; r++){
            for(let c=0; c<cols; c++){
                if(zero_rows.has(r) || zero_cols.has(c)){
                    matrix[r][c] = 0
                }
            }
        }
    }
    */
    setZeroes(matrix) {
        // step 1 -> check wether 1st row / 1st col has zeros by setting 2 flags
        let isFirstRowHasZero = false;
        let isFirstColHasZero = false;

        const rows = matrix.length;
        const cols = matrix[0].length;

        for(let c=0; c<cols; c++){
            if(matrix[0][c] == 0){
                isFirstRowHasZero = true;
                break;
            }
        }

        for(let r=0; r<rows; r++){
            if(matrix[r][0] == 0){
                isFirstColHasZero = true;
                break;
            }
        }

        // step 2 -> loop matrix from (1,1) and mark the 1st row and 1st col to zero if found zero
        for(let r=1; r<rows; r++){
            for(let c=1; c<cols; c++){
                if(matrix[r][c] == 0){
                    matrix[0][c] = 0;
                    matrix[r][0] = 0;
                }
            }
        }

        // step 3 -> call out all the zero and mark each row/col to zero if M[r][c] = 0
        for(let r=1; r<rows; r++){
            for(let c=1; c<cols; c++){
                if(matrix[0][c] == 0 || matrix[r][0] == 0){
                    matrix[r][c] = 0;
                }
            }
        }

        // step 4 -> check if 2 flags have zero, if yes mark 1st row and 1st col to 0
        if(isFirstRowHasZero){
            for(let c=0; c<cols; c++) matrix[0][c] = 0;
        }

        if(isFirstColHasZero){
            for(let r=0; r<rows; r++) matrix[r][0] = 0;
        }
    }
}
