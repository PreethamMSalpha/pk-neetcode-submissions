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
     * @return {number[][]}
     */
    levelOrder(root) {
        if(!root) return [];

        let res = [];

        let queue = [root];

        while(queue.length){
            const levelSize = queue.length;
            const currentLevel = [];

            for(let i=0; i<levelSize; i++){
                const node = queue.shift(); // element popped
                currentLevel.push(node.val);

                if(node.left) queue.push(node.left);
                if(node.right) queue.push(node.right);
            }

            res.push(currentLevel);
        }

        return res;
    }
}
