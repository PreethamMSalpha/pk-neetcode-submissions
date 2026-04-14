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
     * @param {number} k
     * @return {number}
     */
    kthSmallest(root, k) {
        let res = this.inOrder(root, []);
        console.log('res -> ', res)
        return res[k - 1];
    }

    inOrder(root, res){
        if(!root) return null;

        this.inOrder(root.left, res);
        res.push(root.val);
        this.inOrder(root.right, res);

        return res;
    }
}
