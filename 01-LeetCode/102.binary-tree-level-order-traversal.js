/* 102. Binary Tree Level Order Traversal: https://leetcode.com/problems/binary-tree-level-order-traversal/
 * @Author: Gerrit Janssen 
 * @Date: 2023-01-26 20:38:51 
 * @Last Modified by: Gerrit Janssen
 * @Last Modified time: 2023-01-26 20:39:16
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
 * @return {number[][]}
 */
var levelOrder = function(root) {
    if(!root) return [];

    const res = [];
    const bfs = node => {
        const queue = [node];
        while(queue.length) {
            const qLen = queue.length;
            const lvl = [];
            for(let i = 0; i < qLen; i++) {
                const n = queue.shift();
                lvl.push(n.val);
                if(n.left) queue.push(n.left);
                if(n.right) queue.push(n.right);
            }
            res.push(lvl);
        }
    };

    bfs(root);
    return res;
};