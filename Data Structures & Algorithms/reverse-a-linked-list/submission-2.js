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
     * @return {ListNode}
     */
    reverseList(head) {

        if(!head) return null;

        let newHead = head; // 2

        if(head.next){
            newHead = this.reverseList(head.next); // 3
            head.next.next = head; // 2->3->2
        }

        head.next = null; // 2<-3

        return newHead // 2 <- 3
    }
}
