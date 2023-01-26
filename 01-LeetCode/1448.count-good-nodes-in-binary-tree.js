/* 1448. Count Good Nodes in Binary Tree: https://leetcode.com/problems/count-good-nodes-in-binary-tree/
 * @Author: Gerrit Janssen 
 * @Date: 2023-01-26 20:40:22 
 * @Last Modified by: Gerrit Janssen
 * @Last Modified time: 2023-01-26 20:40:44
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
 * @return {number}
 */
var goodNodes = function(root) {
    let res = 0;
    
    // iterative
    /*if(!root) return res;
    const stack = [[root, -Infinity]];
    while(stack.length) {
        const [n, max] = stack.pop();
        if(n.val >= max) res++;

        if(n.left) stack.push([n.left, Math.max(max, n.val)]);
        if(n.right) stack.push([n.right, Math.max(max, n.val)]);
    }*/

    // recursive
    const helper = (node, max) => {
        if(!node) return;
        if(node.val >= max) res++;
        max = Math.max(max, node.val);
        helper(node.left, max);
        helper(node.right, max);
    };
    helper(root, -Infinity);

    return res;
};