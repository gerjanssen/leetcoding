/* 141. Linked List Cycle: https://leetcode.com/problems/linked-list-cycle/
 * @Author: Gerrit Janssen 
 * @Date: 2023-01-13 16:09:10 
 * @Last Modified by: Gerrit Janssen
 * @Last Modified time: 2023-01-13 16:11:05
 */

/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} head
 * @return {boolean}
 */
var hasCycle = function(head) {
    if(!head) return false;

    // solution using the tortoise and hare / slow and fast pointer algorith: O(n) time, O(1) space
    let [slow, fast] = [head, head];
    while(fast && fast.next) {
        slow = slow.next;
        fast = fast.next.next;
        if(fast === slow) return true;
    }
    
    return false;
};