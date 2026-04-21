class Solution {
    /**
     * @param {string[][]} tickets
     * @return {string[]}
     */
    findItinerary(tickets) {
        // step1 : adjacency list
        let adj = new Map();

        for(const [source, dest] of tickets){
            if(!adj.has(source)) adj.set(source, [])

            adj.get(source).push(dest);
        }

        // step2: sort destination lexically
        for(const [_, dest] of adj){
            dest.sort().reverse();
        }

        // do dfs - POST order 
        let res = [];

        function dfs(airport){
            let dest = adj.get(airport) || [];

            //post-order traversal
            while(dest.length){
                const destination = dest.pop();
                dfs(destination);
            }

            res.push(airport);
        }

        dfs("JFK");

        return res.reverse(); // reverse because we used post order traversal
    }
}
