class Solution {
    /**
     * @param {character[][]} grid
     * @return {number}
     */
    numIslands(grid) {
        let count = 0;
        let rows = grid.length;
        let cols = grid[0].length;


        function dfs(r, c){
            // base condition
            if(r < 0 || r >= rows || c<0 || c>=cols) return;

            // already visited node
            if(grid[r][c] != '1') return;

            grid[r][c] = '0'; // mark as visited

            // explore in all 4 direction
            dfs(r+1, c);
            dfs(r-1, c);
            dfs(r, c+1);
            dfs(r, c-1);
        }

        for(let r = 0; r<rows; r++){
            for(let c = 0; c<cols; c++){
                if(grid[r][c] == '1'){
                    count++;
                    dfs(r,c);
                }
            }
        }

        return count;
    }
}
