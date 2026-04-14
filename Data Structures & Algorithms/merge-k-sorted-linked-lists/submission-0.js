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
     * @param {ListNode[]} lists
     * @return {ListNode}
     */
    mergeKLists(lists) {
        if(!lists.length) return null;

        while(lists.length > 1){
            let merged_list = [];
            for(let i=0; i < lists.length; i+=2){
                let l1 = lists[i];
                let l2 = i + 1 < lists.length ? lists[i+1] : null;

                merged_list.push(this.mergeList(l1, l2))
            }

            lists = merged_list;
        }

        return lists[0];
    }

    mergeList(l1, l2){
        let temp = new ListNode(-1);
        let curr = temp;

        while(l1 && l2){
            if(l1.val <= l2.val){
                curr.next = l1;
                l1 = l1.next;
            }else{
                curr.next = l2;
                l2 = l2.next;
            }

            curr = curr.next;
        }

        curr.next = l1 || l2;

        return temp.next;
    }

    
}
