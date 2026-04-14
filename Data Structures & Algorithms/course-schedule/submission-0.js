class Solution {
    /**
     * @param {number} numCourses
     * @param {number[][]} prerequisites
     * @return {boolean}
     */
    canFinish(numCourses, prerequisites) {
        const graph = Array.from({length: numCourses}, () => []);

        for(let [course, prereq] of prerequisites){
            graph[prereq].push(course);
        }

        const visited_arr = new Array(numCourses).fill(0); // 0-unvisited,1-visiting,2-visited

        function dfs(node){
            if(visited_arr[node] == 1) return false;
            if(visited_arr[node] == 2) return true;

            // mark as visiting
            visited_arr[node] = 1;

            // check for neighbours
            for(const neigh of graph[node]){
                if(!dfs(neigh)) return false;
            }

            // mark as visited
            visited_arr[node] = 2;

            return true;
        }

        for(let i=0; i<numCourses; i++){
            if(!dfs(i)) return false;
        }

        return true;
    }
}
