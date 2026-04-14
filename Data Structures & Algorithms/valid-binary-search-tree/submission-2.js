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
     * @return {boolean}
     */
    isValidBST(root) {
        // return this.dfs(root, -Infinity, Infinity);

        if(!root) return true;

        // [node, min, max];
        let stack = [[root, -Infinity, Infinity]];

        while(stack.length){
            const [node, min, max] = stack.pop();

            if(node.val <= min || node.val >= max) return false;

            if(node.left) stack.push([node.left, min, node.val])
            if(node.right) stack.push([node.right, node.val, max])
        }

        return true;
    }

    dfs(root, min, max){
        if(!root) return true;

        if(root.val <= min || root.val >= max) return false;

        return this.dfs(root.left, min, root.val ) && this.dfs(root.right, root.val, max)
    }
}
