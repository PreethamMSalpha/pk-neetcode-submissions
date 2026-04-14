// class Node {
//   constructor(val, next = null, random = null) {
//       this.val = val;
//       this.next = next;
//       this.random = random;
//   }
// }

class Solution {
    /**
     * @param {Node} head
     * @return {Node}
     */
    copyRandomList(head) {
        if(!head) return null;
        let map = new Map();

        // 1st pass - map all the node to HashMap
        let curr = head;
        while(curr){
            map.set(curr, new Node(curr.val));
            curr = curr.next; // move to next node
        }
        
        //reset head
        curr = head;
        // 2nd pass - link all the nodes
        while(curr){
            let copy = map.get(curr);
            copy.next = map.get(curr.next) || null;
            copy.random = map.get(curr.random) || null;
            curr = curr.next;
        }

        return map.get(head);
    }
}
