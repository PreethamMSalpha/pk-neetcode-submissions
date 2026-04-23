// const { MinPriorityQueue } = require('@datastructures-js/priority-queue');

class Solution {
    /**
     * @param {number[][]} grid
     * @return {number}
     */
    swimInWater(grid) {
        const n = grid.length;
        const seen = Array.from({length: n}, () => Array(n).fill(false));

        
        const minHeap = [[grid[0][0], 0, 0]]
        // minHeap.enqueue([0, 0, 0]); // [elevation, row, col]
        seen[0][0] = true;

        let maxSeen = 0;
        const dirs = [[0, 1], [1, 0], [0, -1], [-1, 0]];

        while(minHeap.length){
            minHeap.sort((a,b) => a[0] - b[0]);
            // const { element: [elev, r, c] } = minHeap.dequeue();
            const [elev, r, c] = minHeap.shift();
            maxSeen = Math.max(maxSeen, elev);

            if(r == n-1 && c == n-1) return maxSeen;

            for(const [dr, dc] of dirs){
                const nr = r+dr, nc = c+dc;

                if(nr < 0 || nr >= n || nc < 0 || nc >= n) continue;
                if(seen[nr][nc]) continue;

                seen[nr][nc] = true;
                minHeap.push([grid[nr][nc], nr, nc]);
            }

        }

        return maxSeen;
    }
}
