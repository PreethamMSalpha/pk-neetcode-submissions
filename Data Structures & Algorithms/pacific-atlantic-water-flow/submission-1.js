class Solution {
    /**
     * @param {number[][]} heights
     * @return {number[][]}
     */
    pacificAtlantic(heights) {
        if(!heights || heights.length == 0) return [];

        let rows = heights.length;
        let cols = heights[0].length;

        let dirs = [ [0, 1], [0, -1], [1, 0], [-1, 0] ];

        let pacific = Array.from({length: rows}, () => Array(cols).fill(false));
        let atlantic = Array.from({length: rows}, () => Array(cols).fill(false));

        function dfs(r, c, visited, prevHeight){
            // base condition - out of bounds
            if(r < 0 || r >= rows || c<0 || c>=cols) return;

            // if node already visited
            if(visited[r][c]) return;

            // height check
            if(heights[r][c] < prevHeight) return;

            // mark as visited
            visited[r][c] = true;

            for(let [dr, dc] of dirs){
                dfs(r+dr, c+dc, visited, heights[r][c]);
            }
        }

        // pacific run
        for(let r = 0; r<rows; r++) dfs(r, 0, pacific, heights[r][0]); // left most
        for(let c = 0; c<cols; c++) dfs(0, c, pacific, heights[0][c]); // top most

        // atlantic run
        for(let r=0; r<rows; r++) dfs(r, cols-1, atlantic, heights[r][cols-1]); //right most
        for(let c=0; c<cols; c++) dfs(rows-1, c, atlantic, heights[rows-1][c]); //bottom most

        let res = [];
        for(let r=0; r<rows; r++){
            for(let c=0; c<cols; c++){
                if(atlantic[r][c] && pacific[r][c]){
                    res.push([r, c])
                }
            }
        }

        return res;
    }
}
