/* 199. Binary Tree Right Side View: https://leetcode.com/problems/binary-tree-right-side-view/
 * @Author: Gerrit Janssen 
 * @Date: 2023-01-26 20:39:39 
 * @Last Modified by: Gerrit Janssen
 * @Last Modified time: 2023-01-26 20:40:00
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
 * @return {number[]}
 */
var rightSideView = function(root) {
    if(!root) return [];

    const res = [];
    const bfs = node => {
        const queue = [node];
        while(queue.length) {
            const qLen = queue.length;
            let rightMostNode;
            for(let i = 0; i < qLen; i++) {
                const n = queue.shift();
                rightMostNode = n;
                if(n.left) queue.push(n.left);
                if(n.right) queue.push(n.right);
            }
            res.push(rightMostNode.val);
        }
    };

    bfs(root);
    return res;
};