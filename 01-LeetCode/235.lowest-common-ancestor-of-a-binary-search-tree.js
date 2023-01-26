/* 235. Lowest Common Ancestor of a Binary Search Tree: https://leetcode.com/problems/lowest-common-ancestor-of-a-binary-search-tree/
 * @Author: Gerrit Janssen 
 * @Date: 2023-01-26 20:38:02 
 * @Last Modified by: Gerrit Janssen
 * @Last Modified time: 2023-01-26 20:38:24
 */

/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */

/**
 * @param {TreeNode} root
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {TreeNode}
 */
var lowestCommonAncestor = function(root, p, q) {
    let curr = root;
    while(curr) {
        if(p.val < curr.val && q.val < curr.val) curr = curr.left;
        else if(p.val > curr.val && q.val > curr.val) curr = curr.right;
        else return curr;
    }
};