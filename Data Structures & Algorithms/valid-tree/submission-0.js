class Solution {
    /**
     * @param {number} n
     * @param {number[][]} edges
     * @returns {boolean}
     */
    validTree(n, edges) {
        if(edges.length !== n-1) return false;

        const graph = Array.from({length: n}, () => []);

        // create adjacency list
        for(const [a,b] of edges){
            graph[a].push(b);
            graph[b].push(a);
        }

        const visited = new Set();

        function dfs(node, parent){ 
            // base condition
            if(visited.has(node)) return false;

            visited.add(node);

            // loop through the neighbours
            for(const neighbour of graph[node]){
                if(neighbour == parent) continue;
                if(!dfs(neighbour, node)) return false;
            }

            return true;
        }

        return dfs(0, -1) && visited.size == n;
    }
}
