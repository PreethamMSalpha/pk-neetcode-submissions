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
     * @return {void}
     */
    reorderList(head) {
        if(!head.next) return head;

        let slow = head;
        let fast = head;

        while(fast && fast.next){
            slow = slow.next;
            fast = fast.next.next;
        }

        // slow is pointing to mid and fast pointing to last

        // reverse the second half
        let l2 = this.reverse(slow.next);
        slow.next = null; // detached 1st and 2nd halves

        let l1 = head;

        while(l2){
            let temp1 = l1.next, temp2 = l2.next;

            l1.next = l2;
            l2.next = temp1;

            l1 = temp1;
            l2 = temp2;
        }
    }

    reverse(head){
        let prev = null;
        let curr = head;

        while(curr){
            let next = curr.next;
            curr.next = prev;
            prev = curr;
            curr = next;
        }

        return prev;
    }
}
