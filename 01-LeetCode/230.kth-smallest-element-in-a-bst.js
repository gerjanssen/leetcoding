/* 230. Kth Smallest Element in a BST: https://leetcode.com/problems/kth-smallest-element-in-a-bst/
 * @Author: Gerrit Janssen 
 * @Date: 2023-01-26 20:42:00 
 * @Last Modified by:   Gerrit Janssen 
 * @Last Modified time: 2023-01-26 20:42:00 
 */

/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number} k
 * @return {number}
 */
var kthSmallest = function(root, k) {
    const stack = [];
    let curr = root;
    let n = 0;
    while(curr || stack.length) {
        while(curr) {
            stack.push(curr);
            curr = curr.left;
        }

        const node = stack.pop();
        n++;
        if(n === k) return node.val;
        curr = node.right;
    }
};