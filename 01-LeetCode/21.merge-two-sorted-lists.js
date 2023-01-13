/* 21. Merge Two Sorted Lists: https://leetcode.com/problems/merge-two-sorted-lists/
 * @Author: Gerrit Janssen 
 * @Date: 2023-01-13 16:06:25 
 * @Last Modified by:   Gerrit Janssen 
 * @Last Modified time: 2023-01-13 16:06:25 
 */

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} list1
 * @param {ListNode} list2
 * @return {ListNode}
 */
var mergeTwoLists = function(list1, list2) {
    // O(n) time, O(1) space
    const sentinel = new ListNode();
    let [l1, l2] = [list1, list2];
    let curr = sentinel;
    while(l1 && l2){
        if(l1.val < l2.val) {
            curr.next = l1;
            l1 = l1.next;
        } else {
            curr.next = l2;
            l2 = l2.next;
        }
        curr = curr.next;
    }
    if(l1) curr.next = l1;
    else if(l2) curr.next = l2;

    return sentinel.next;
};