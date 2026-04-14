class Solution {
    /**
     * @param {number} n
     * @param {number[][]} edges
     * @returns {number}
     */
    countComponents(n, edges) {
        // build the graph
        const graph = Array.from({length: n}, () => []);

        let counter = 0;

        for(const [a,b] of edges){
            graph[a].push(b);
            graph[b].push(a);
        }

        // maintain set
        const visited = new Set();

        function dfs(node){
            if(visited.has(node)) return;

            visited.add(node);

            for(const neighbour of graph[node]){
                dfs(neighbour);
            }
        }

        for(let i=0; i<n; i++){
            if(!visited.has(i)){
                counter++;
                dfs(i);
            }
        }

        return counter;
    }
}
