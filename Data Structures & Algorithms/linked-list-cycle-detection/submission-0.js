/**
 * Definition for singly-linked list.
 * class ListNode {
 *     constructor(val = 0, next = null) {
 *         this.val = val;
 *         this.next = next;
 *     }
 * }
 */

class Solution {
    /**
     * @param {ListNode} head
     * @return {boolean}
     */
    hasCycle(head) {
        if(!head) return false;

        let visited = new Set();

        while(head){
            if(visited.has(head)) return true;

            visited.add(head);
            head = head.next;
        }

        return false;
    }
}
