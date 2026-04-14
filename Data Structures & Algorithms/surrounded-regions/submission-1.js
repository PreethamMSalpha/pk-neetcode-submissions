class Solution {
    /**
     * @param {character[][]} board
     * @return {void} Do not return anything, modify board in-place instead.
     */
    solve(board) {
        let rows = board.length;
        let cols = board[0].length;
        let dirs = [[0,1], [0,-1], [1,0], [-1, 0]];

        function dfs(r, c){
            // base conditions
            if(r < 0 || r >= rows || c < 0 || c >= cols) return;
            if(board[r][c] != 'O') return;

            // mark cell as safe
            board[r][c] = 'S';
            for(const [dr, dc] of dirs){
                dfs(r+dr, c+dc);
            }
        }

        // scans from all 4 borders
        for(let r = 0; r<rows; r++){
            if(board[r][0] == 'O') dfs(r, 0);
            if(board[r][cols-1] == 'O') dfs(r, cols - 1);
        }

        for(let c = 0; c<cols; c++){
            if(board[0][c] == 'O') dfs(0, c);
            if(board[rows-1][c] == 'O') dfs(rows-1, c);
        }

        // cell manipulation
        for(let r=0; r<rows; r++){
            for(let c=0; c<cols; c++){
                if(board[r][c] == 'O') board[r][c] = 'X';
                if(board[r][c] == 'S') board[r][c] = 'O';
            }
        }
    }
}
