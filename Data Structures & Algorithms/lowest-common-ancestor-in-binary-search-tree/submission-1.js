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
     * @param {TreeNode} p
     * @param {TreeNode} q
     * @return {TreeNode}
     */
    lowestCommonAncestor(root, p, q) {
        // let curr = root;

        // while(curr){
        //     if(p.val > curr.val && q.val > curr.val){ // search right
        //         curr = curr.right;
        //     }else if(p.val < curr.val && q.val < curr.val){ // search left
        //         curr = curr.left;
        //     }else{
        //         return curr;
        //     }
        // }


        // recursive solution
        if(!root) return null;

        if(p.val > root.val && q.val > root.val){ // search right
            return this.lowestCommonAncestor(root.right, p, q);
        }else if(p.val < root.val && q.val < root.val){ // search left
            return this.lowestCommonAncestor(root.left, p, q);
        }else{
            return root;
        }
    }
}
