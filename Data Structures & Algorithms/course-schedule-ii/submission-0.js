class Solution {
    /**
     * @param {number} numCourses
     * @param {number[][]} prerequisites
     * @return {number[]}
     */
    findOrder(numCourses, prerequisites) {
        let adjacencylist = Array.from({length: numCourses}, () => []);

        // create adjacency list
        for(const [a,b] of prerequisites){
            adjacencylist[b].push(a);
        }

        console.log(adjacencylist)

        // 0 -> unvisited, 1 -> visiting, 2 -> visited
        let state = new Array(numCourses).fill(0); 
        let hasCycle = false;
        let res = [];

        function dfs(idx){
            // base condition
            if(state[idx] == 1) { // cycle found
                hasCycle = true;
                return;
            }

            if(state[idx] == 2) return; // already visited

            // mark state as visiting
            state[idx] = 1;

            // do dfs on neighbours
            for(const neigh of adjacencylist[idx]){
                dfs(neigh);
                if(hasCycle) return;
            }
            
            // mark state as visited
            state[idx] = 2;
            res.push(idx);
        }

        for(let i=0; i<numCourses; i++){
            if(state[i] == 0){ // run dfs on unvisited nodes only
                dfs(i);
            }
            if(hasCycle) return [];
        }

        return res.reverse();
    }
}
