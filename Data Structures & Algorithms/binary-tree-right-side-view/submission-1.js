/**
 * Definition for a binary tree node.
 * class TreeNode {
 *     constructor(val = 0, left = null, right = null) {
 *         this.val = val;
 *         this.left = left;
 *         this.right = right;
 *     }
 * }
 */

class Solution {
    /**
     * @param {TreeNode} root
     * @return {number[]}
     */
    rightSideView(root) {
        if(!root) return [];

        let res = [];


        /* // iterative approach
        let queue = [root];
        
        while(queue.length){
            const levelSize = queue.length;

            for(let i=0; i<levelSize; i++){
                const node = queue.shift();

                if(i == levelSize - 1){ // right most element of the queue
                    res.push(node.val);
                }

                if(node.left) queue.push(node.left);
                if(node.right) queue.push(node.right);
            }
        }
        */

        function dfs(root, depth){
            if(!root) return null;

            if(depth == res.length){
                res.push(root.val);
            }

            if(root.right) dfs(root.right, depth + 1);
            if(root.left) dfs(root.left, depth + 1);
        }

        dfs(root, 0);

        return res;
    }
}
