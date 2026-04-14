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
     * @return {number}
     */
    goodNodes(root) {
        if(!root) return null;

        let count = 0;

        function dfs(node, maxValue){
            if(!node) return null;

            if(node.val >= maxValue) count++;
            maxValue = Math.max(maxValue, node.val)

            dfs(node.left, maxValue);
            dfs(node.right, maxValue);
        }

        dfs(root, root.val);

        return count;
    }
}
