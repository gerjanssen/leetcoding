/* 226. Invert Binary Tree: https://leetcode.com/problems/invert-binary-tree/
 * @Author: Gerrit Janssen 
 * @Date: 2023-01-13 16:22:52 
 * @Last Modified by: Gerrit Janssen
 * @Last Modified time: 2023-01-13 16:24:07
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
 * @return {TreeNode}
 */
var invertTree = function(root) {
    // recursive solution 

    if(root === null) return root;

    const tmp = invertTree(root.right);
    root.right = invertTree(root.left);
    root.left = tmp;
    return root;
};