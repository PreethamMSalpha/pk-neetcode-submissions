class Solution {
    /**
     * @param {number[][]} grid
     * @return {number}
     */
    maxAreaOfIsland(grid) {
        let maxArea = 0;
        let rows = grid.length;
        let cols = grid[0].length;


        function dfs(r, c){
            //base condition
            if(r < 0 || r >= rows || c < 0 || c >= cols) return 0;

            // check for already visisted node
            if(grid[r][c] != '1') return 0;

            // mark node as visited
            grid[r][c] = '0';

            return 1 + dfs(r+1, c) + dfs(r-1, c) + dfs(r, c - 1) + dfs(r, c+1);
        }

        for(let r = 0; r < rows; r++){
            for(let c = 0; c<cols; c++){
                maxArea = Math.max(maxArea, dfs(r, c))
            }
        }

        return maxArea;
    }
}
