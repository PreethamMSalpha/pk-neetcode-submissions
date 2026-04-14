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
    maxPathSum(root) {
        let maxPathSum = [-Infinity];

        this.dfs(root, maxPathSum);

        return maxPathSum[0];
    }

    dfs(root, maxPathSum){
        if(!root) return 0;

        const left = Math.max(this.dfs(root.left, maxPathSum), 0);
        const right = Math.max(this.dfs(root.right, maxPathSum), 0);

        // with split max value
        const localPath = root.val + left + right;
        maxPathSum[0] = Math.max(maxPathSum[0], localPath);

        // return the max value without split
        return root.val + Math.max(left, right);
    }
}
