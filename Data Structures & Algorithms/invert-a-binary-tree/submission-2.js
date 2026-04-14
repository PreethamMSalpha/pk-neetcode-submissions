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
     * @return {TreeNode}
     */
    invertTree(root) {
        if(!root) return null;

        let queue = [root];

        while(queue.length){
            let curr = queue.shift();

            let temp = curr.left;
            curr.left = curr.right;
            curr.right = temp;

            if(curr.left) queue.push(curr.left);
            if(curr.right) queue.push(curr.right);
        }

        return root;
    }
}
