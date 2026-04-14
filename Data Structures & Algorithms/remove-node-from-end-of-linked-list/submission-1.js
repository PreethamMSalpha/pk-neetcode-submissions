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
     * @param {number} n
     * @return {ListNode}
     */
    removeNthFromEnd(head, n) {
        let temp = new ListNode(-1);

        temp.next = head;

        let slow = temp;
        let fast = temp;

        // move fast n times ahead
        for(let i=0; i<n && fast; i++){
            fast = fast.next;
        }

        while(fast && fast.next){
            slow = slow.next;
            fast = fast.next;
        }

        let ptr = slow.next.next;
        slow.next = null;
        slow.next = ptr;

        return temp.next;
    }
}
