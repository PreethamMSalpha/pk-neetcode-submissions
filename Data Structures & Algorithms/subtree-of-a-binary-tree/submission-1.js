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
     * @param {TreeNode} subRoot
     * @return {boolean}
     */
    isSubtree(root, subRoot) {
        // base conditions
        if(!subRoot) return true;
        if(!root) return false;

        if(this.isSameTree(root, subRoot)) return true;

        return this.isSubtree(root.left, subRoot) || this.isSubtree(root.right , subRoot);
    }

    isSameTree(t1, t2){
        if(!t1 && !t2) return true; // both null
        if(!t1 || !t2) return false; // one is null
        if(t1.val != t2.val) return false; // value discrepency

        return this.isSameTree(t1.left, t2.left) && this.isSameTree(t1.right, t2.right);
    }
}
