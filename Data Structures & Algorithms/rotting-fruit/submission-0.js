class Solution {
    /**
     * @param {number[][]} grid
     * @return {number}
     */
    orangesRotting(grid) {
        let rows = grid.length;
        let cols = grid[0].length;
        let fresh = 0;
        let mins = 0;

        let queue = [];

        // step1:- calculate fresh count and also store inital rotten fruits
        for(let r=0; r<rows; r++){
            for(let c=0; c<cols; c++){
                if(grid[r][c] == 1) fresh++;
                if(grid[r][c] == 2) queue.push([r,c]);
            }
        }

        const dirs = [[0,1], [0, -1], [1, 0], [-1, 0]];
        
        while(queue.length && fresh > 0){
            const size = queue.length;
            mins++;

            for(let i=0; i<size; i++){
                const [r,c] = queue.shift();

                // iterate in all 4 dirs
                for(const [dr, dc] of dirs){
                    const nr = r+dr;
                    const nc = c+dc;

                    // bounds
                    if(nr < 0 || nr >= rows || nc < 0 || nc >= cols) continue;
                    // not fresh
                    if(grid[nr][nc] != 1) continue;

                    // rot the fruit
                    grid[nr][nc] = 2;
                    // decrement fresh count
                    fresh--;
                    // push to queue
                    queue.push([nr, nc]);
                }
            }
        }

        return fresh == 0 ?  mins : -1;
    }
}
