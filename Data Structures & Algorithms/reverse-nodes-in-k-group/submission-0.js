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
     * @param {number} k
     * @return {ListNode}
     */
    reverseKGroup(head, k) {
        let dummy = new ListNode(0);
        dummy.next = head;

        let groupPrev = dummy;

        while(true){
            let kth = this.getKthNode(groupPrev, k);
            if(!kth) break;

            let groupNext = kth.next;

            let prev = groupNext;
            let curr = groupPrev.next;

            // reverse the list
            while(curr != groupNext){
                let next = curr.next;
                curr.next = prev;
                prev = curr;
                curr = next;
            }

            let groupStart = groupPrev.next;
            groupPrev.next = kth;
            groupStart.next = groupNext;
            groupPrev = groupStart;
        }

        return dummy.next;
    }

    getKthNode(curr, k){
        while(curr && k > 0){
            curr = curr.next;
            k--;
        }

        return curr;
    }
}
