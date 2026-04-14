/**
 * Definition for singly-linked list.
 * class ListNode {
 *     constructor(val = 0, next = null) {
 *         this.val = val;
 *         this.next = next;
 *     }
 * }
 */

/* NOTE:-
    Traverse both lists simultaneously
    Add corresponding digits + carry
    carry = Math.floor(sum / 10)
    digit = sum % 10

    Continue until both lists exhausted AND carry=0
*/

class Solution {
    /**
     * @param {ListNode} l1
     * @param {ListNode} l2
     * @return {ListNode}
     */
    addTwoNumbers(l1, l2) {
        let dummy = new ListNode(0);
        let curr = dummy;

        let carry = 0;

        while(l1 || l2 || carry){
            const l1Val = l1 ? l1.val : 0;
            const l2Val = l2 ? l2.val : 0;

            const sum = l1Val + l2Val + carry;
            carry = Math.floor(sum/10);
            const digit = sum % 10;

            curr.next = new ListNode(digit);
            curr = curr.next;

            if(l1) l1 = l1.next;
            if(l2) l2 = l2.next;
        }

        return dummy.next;
    }
}
