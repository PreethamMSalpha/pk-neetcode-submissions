class Solution {
    /**
     * @param {number[][]} times
     * @param {number} n
     * @param {number} k
     * @return {number}
     */
    networkDelayTime(times, n, k) {
        // step1 -> build adjacency list
        let adj = new Map(); // source -> [destination, weight]

        for(const [u,v,w] of times){
            if(!adj.has(u)) adj.set(u, [])
            adj.get(u).push([v,w])
        }

        // step2 -> build minHeap and distance map
        let minHeap = [[0, k]] // [distance, node]
        let dist = new Map();

        while(minHeap.length){
            // replicate minHeap by sorting now
            minHeap.sort((a,b) => a[0] - b[0]);

            const [d, node] = minHeap.shift();

            if(dist.has(node)) continue; // skip already visited node

            dist.set(node, d);

            console.log('exploring neighbours now')

            // explore the neighbours of node
            for(const [n, w] of adj.get(node) || []){
                console.log([n,w])
                minHeap.push([d + w, n]);
            }
        }
        console.log(adj)
        console.log(dist);

        // length check - all nodes are visited or not
        if(dist.size != n) return -1;

        return Math.max(...dist.values());
    }
}
