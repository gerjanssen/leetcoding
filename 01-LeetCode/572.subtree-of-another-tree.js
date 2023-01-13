/* 572. Subtree of Another Tree: https://leetcode.com/problems/subtree-of-another-tree/
 * @Author: Gerrit Janssen 
 * @Date: 2023-01-13 16:30:23 
 * @Last Modified by: Gerrit Janssen
 * @Last Modified time: 2023-01-13 16:31:19
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
 * @param {TreeNode} subRoot
 * @return {boolean}
 */
var isSubtree = function(root, subRoot) {
    // recursive solution using isSameTree as subroutine
    
    if(!root) return false;
    else if(!subRoot) return true;
    else if(isSameTree(root, subRoot)) return true;
    else return isSubtree(root.left, subRoot) || isSubtree(root.right, subRoot);
};

var isSameTree = function(p, q) {
    if(!p && !q) return true;
    else if(p && q && p.val === q.val) return isSameTree(p.left, q.left) && isSameTree(p.right, q.right);
    else return false;
};