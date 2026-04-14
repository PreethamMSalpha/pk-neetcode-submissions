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

class Codec {
    /**
     * Encodes a tree to a single string.
     *
     * @param {TreeNode} root
     * @return {string}
     */
    serialize(root) {
        let res = [];

        function dfs(root){
            // base condition
            if(!root){
                res.push('N');
                return;
            }

            res.push(String(root.val));
            dfs(root.left);
            dfs(root.right);
        }

        dfs(root);

        return res.join(",");
    }

    /**
     * Decodes your encoded data to tree.
     *
     * @param {string} data
     * @return {TreeNode}
     */
    deserialize(data) {
        let data_arr = data.split(',');
        // console.log(data_arr)
        let i = 0; // pointer

        function dfs(){
            if(data_arr[i] == 'N'){
                i++;
                return null;
            }

            let node = new TreeNode(Number(data_arr[i]));
            i++;
            node.left = dfs();
            node.right = dfs();

            return node;
        }

        return dfs();
    }
}
