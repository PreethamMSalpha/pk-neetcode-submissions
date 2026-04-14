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
    diameterOfBinaryTree(root) {
        let diameter = 0;

        function dfs(root){
            if(!root) return null;

            const left = dfs(root.left);
            const right = dfs(root.right);

            diameter = Math.max(diameter, left + right);

            return 1 + Math.max(left, right);
        }

        dfs(root);
        return diameter;
    }
}
