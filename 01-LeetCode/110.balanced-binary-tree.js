/* 110. Balanced Binary Tree: https://leetcode.com/problems/balanced-binary-tree/
 * @Author: Gerrit Janssen 
 * @Date: 2023-01-14 12:34:12 
 * @Last Modified by: Gerrit Janssen
 * @Last Modified time: 2023-01-14 12:34:56
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
var isBalanced = function(root) {
    if(!root) return true;
    
    let res = true;
    const helper = node => {
        if(!node) return 0;

        const heightLeft = helper(node.left);
        const heightRight = helper(node.right);

        res &&= Math.abs(heightLeft - heightRight) <= 1;
        return 1 + Math.max(heightLeft, heightRight);
    };
    
    helper(root);
    return res;
};