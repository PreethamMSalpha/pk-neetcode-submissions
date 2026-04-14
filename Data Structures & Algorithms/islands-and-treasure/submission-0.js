class Solution {
    /**
     * @param {number[][]} grid
     */
    islandsAndTreasure(grid) {
        const rows = grid.length;
        const cols = grid[0].length;
        const queue = [];
        const INF = 2147483647;

        // step1:- we have to collect all the treasure points
        for(let r=0; r<rows; r++){
            for(let c=0; c<cols; c++){
                if(grid[r][c] == 0){
                    queue.push([r, c]);
                }
            }
        }

        // step2:- bfs on all 4 dirs
        const dirs = [[1,0],[-1,0],[0,1],[0,-1]];

        while(queue.length){
            const [r, c] = queue.shift();

            for(const [dr, dc] of dirs){
                const nr = dr+r;
                const nc = dc+c;

                // boundary check
                if(nr < 0 || nr >= rows || nc < 0 || nc >= cols) continue;
                // visited check
                if(grid[nr][nc] != INF) continue; // already visited

                grid[nr][nc] = grid[r][c] + 1;
                queue.push([nr, nc]);
            }
        }
    }
}
