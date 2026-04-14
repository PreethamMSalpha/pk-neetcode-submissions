class Solution {
    /**
     * @param {character[][]} board
     * @param {string} word
     * @return {boolean}
     */
    exist(board, word) {
        let rows = board.length;
        let cols = board[0].length;

        function dfs(r, c, idx){
            // base condition
            if(word.length === idx) return true;

            // trade-offs
            if(r<0 || r>=rows || c<0 || c>=cols) return false;

            // check for revisit entries
            if(board[r][c] != word[idx]) return false;

            let temp = board[r][c];
            board[r][c] = '#'; // visited cell

            const found = dfs(r-1, c, idx+1) ||
                            dfs(r, c+1, idx+1) ||
                            dfs(r+1, c, idx+1) ||
                            dfs(r, c-1, idx+1);

            board[r][c] = temp;
            return found;
        }

        for(let r=0; r<rows; r++){
            for(let c=0; c<cols; c++){
                if(dfs(r, c, 0)) return true;
            }
        }

        return false;
    }
}
