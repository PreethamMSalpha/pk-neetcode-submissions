class Solution {
    /**
     * @param {number[][]} points
     * @return {number}
     */
    minCostConnectPoints(points) {
        const n = points.length;
        // build adjacency list
        let adj = Array.from({length: n}, () => []);

        for(let i=0; i<n; i++){
            for(let j=i+1; j<n; j++){
                const dist = Math.abs(points[i][0] - points[j][0])
                    + Math.abs(points[i][1] - points[j][1]);
                adj[i].push([j, dist]);
                adj[j].push([i, dist]);
            }
        }

        let visited = new Set();
        let minHeap = new MinPriorityQueue((entry) => entry[0]);
        minHeap.push([0,0]);
        // let minHeap = [[0, 0]] // dist, node
        let total = 0;

        while(visited.size < n){
            // minHeap.sort((a,b) => a[0] - b[0]);

            let [cost, i] = minHeap.pop();

            if(visited.has(i)) continue;

            visited.add(i);
            total += cost;

            // explore the neighbours
            for(let j=0; j<n; j++){
                if(visited.has(j)) continue;

                const dist = Math.abs(points[i][0] - points[j][0])
                    +Math.abs(points[i][1] - points[j][1]);


                minHeap.push([dist, j])
            }
        }

        return total;
    }
}
