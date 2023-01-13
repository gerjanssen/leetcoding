/* 100. Same Tree: https://leetcode.com/problems/same-tree/
 * @Author: Gerrit Janssen 
 * @Date: 2023-01-13 16:29:05 
 * @Last Modified by: Gerrit Janssen
 * @Last Modified time: 2023-01-13 16:29:40
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
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {boolean}
 */
var isSameTree = function(p, q) {
    // recursive solution

    if(!p && !q) return true;
    else if(!p && q || p && !q) return false;
    else return p.val === q.val && isSameTree(p.left, q.left) && isSameTree(p.right, q.right);
};