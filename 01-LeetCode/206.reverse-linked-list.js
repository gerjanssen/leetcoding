/* 206. Reverse Linked List: https://leetcode.com/problems/reverse-linked-list/
 * @Author: Gerrit Janssen 
 * @Date: 2023-01-13 16:04:03 
 * @Last Modified by: Gerrit Janssen
 * @Last Modified time: 2023-01-13 16:06:06
 */

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var reverseList = function(head) {
    // interative solution: O(n) time, O(1) space
    let [prev, curr] = [null, head];
    while(curr){
        const next = curr.next;
        curr.next = prev;
        prev = curr;
        curr = next;
    }
    return prev;
};