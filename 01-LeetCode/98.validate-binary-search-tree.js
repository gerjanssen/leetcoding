/* 98. Validate Binary Search Tree: https://leetcode.com/problems/validate-binary-search-tree/
 * @Author: Gerrit Janssen 
 * @Date: 2023-01-26 20:41:11 
 * @Last Modified by: Gerrit Janssen
 * @Last Modified time: 2023-01-26 20:41:32
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
 * @return {boolean}
 */
var isValidBST = function(root) {
    return helper(root, -Infinity, Infinity);
};

var helper = function(node, min, max) {
    if(!node) return true;
    return (
        node.val >= min && 
        node.val <= max &&
        helper(node.left, min, node.val - 1) &&
        helper(node.right, node.val + 1, max)
    )
};