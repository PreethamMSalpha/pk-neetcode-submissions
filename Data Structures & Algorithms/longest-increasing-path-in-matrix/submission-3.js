class Solution {
    /**
     * @param {number[][]} matrix
     * @return {number}
     */
    longestIncreasingPath(matrix) {
        const m = matrix.length, n = matrix[0].length;

        let indegree = Array.from({length: m}, () => new Array(n).fill(0));

        let dirs = [[0,1], [0,-1], [1,0], [-1, 0]];

        console.log('halo')

        // calculate the indegree matrix
        for(let r=0; r<m; r++){
            for(let c=0; c<n; c++){
                for(const [dr, dc] of dirs){
                    const nr = r + dr, nc = c + dc;

                    if(nr < 0 || nr >= m || nc < 0 || nc >= n) continue;

                    if(matrix[nr][nc] > matrix[r][c]) indegree[nr][nc]++;
                }
            }
        }

        const queue = [];
        for(let r=0; r<m; r++){
            for(let c=0; c<n; c++){
                if(indegree[r][c] == 0){
                    queue.push([r,c]);
                }
            }
        }

        let longest = 0;
        while(queue.length){
            const size = queue.length;
            longest++;

            for(let i=0; i<size; i++){
                const [r, c] = queue[i];

                for(const [dr, dc] of dirs){
                    const nr = r+dr, nc = c+dc;

                    if(nr < 0 || nr >= m || nc < 0 || nc >= n) continue;
                    if (matrix[nr][nc] <= matrix[r][c]) continue;

                    indegree[nr][nc]--;

                    if(indegree[nr][nc] == 0) queue.push([nr, nc]);
                }
            }
            queue.splice(0, size);
        }

        return longest;
    }
}
