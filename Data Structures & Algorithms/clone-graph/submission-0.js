/**
 * // Definition for a Node.
 * class Node {
 *     constructor(val = 0, neighbors = []) {
 *       this.val = val;
 *       this.neighbors = neighbors;
 *     }
 * }
 */

class Solution {
    /**
     * @param {Node} node
     * @return {Node}
     */
    cloneGraph(node) {
        if(!node) return null;

        let visited = new Map();

        function dfs(node){
            //base condition
            if(visited.has(node)) return visited.get(node);

            const clone = new Node(node.val);
            visited.set(node, clone);

            for(let neighbor of node.neighbors){
                clone.neighbors.push(dfs(neighbor));
            }

            return clone;
        }

        return dfs(node);
    }
}
