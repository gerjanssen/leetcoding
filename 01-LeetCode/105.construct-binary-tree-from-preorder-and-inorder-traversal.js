/* 105. Construct Binary Tree from Preorder and Inorder Traversal: https://leetcode.com/problems/construct-binary-tree-from-preorder-and-inorder-traversal/
 * @Author: Gerrit Janssen 
 * @Date: 2023-01-26 20:42:38 
 * @Last Modified by:   Gerrit Janssen 
 * @Last Modified time: 2023-01-26 20:42:38 
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
 * @param {number[]} preorder
 * @param {number[]} inorder
 * @return {TreeNode}
 */
var buildTree = function(preorder, inorder) {
    if(!preorder.length) return null;
    const rootVal = preorder[0];
    const index = inorder.indexOf(rootVal);
    const left = buildTree(preorder.slice(1, index + 1), inorder.slice(0, index));
    const right = buildTree(preorder.slice(index + 1), inorder.slice(index + 1));
    return new TreeNode(rootVal, left, right);
};