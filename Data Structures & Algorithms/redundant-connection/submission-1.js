class Solution {
    /**
     * @param {number[][]} edges
     * @return {number[]}
     */
    findRedundantConnection(edges) {
        const n = edges.length;
        let parent = Array.from({length: n+1}, (_, i) => i); // every node is parent of itself
        let rank = new Array(n+1).fill(0);

        function find(x){
            if(parent[x] != x){
                parent[x] = find(parent[x]);
            }
            return parent[x];
        }

        function union(x, y){
            let px = find(x);
            let py = find(y);

            if(px == py) return false; // find cycle

            // merge by rank
            if(rank[px] > rank[py]) parent[py] = px;
            else if(rank[py] > rank[px]) parent[px] = py;
            else{
                parent[py] = px;
                rank[px]++;
            }

            return true;
        }

        for(const [x,y] of edges){
            if(!union(x,y)){
                return [x, y];
            }
        }

        return [];
    }
}
