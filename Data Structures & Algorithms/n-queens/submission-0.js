class Solution {
    /**
     * @param {number} n
     * @return {string[][]}
     */
    solveNQueens(n) {
        let res = [];
        let diag = new Set(); // row - col
        let antidiag = new Set() // row + col
        let cols = new Set();

        function backtrack(row, board){
            // base condition
            if(row == n){
                res.push(board.map(b => ['.'.repeat(b) + 'Q' + '.'.repeat(n - b - 1)]));
                return;
            }

            for(let col = 0; col<n; col++){ // looping through every column
                // constraint checks
                if(cols.has(col) || diag.has(row - col) || antidiag.has(row + col)) continue; // skip

                // choose
                cols.add(col);
                diag.add(row-col);
                antidiag.add(row+col);
                board.push(col);

                // backtrack
                backtrack(row + 1, board)

                // unchoose
                cols.delete(col);
                diag.delete(row-col);
                antidiag.delete(row+col);
                board.pop();
            }
        }

        backtrack(0, []);

        return res;
    }
}
