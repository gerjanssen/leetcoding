/* 104. Maximum Depth of Binary Tree: https://leetcode.com/problems/maximum-depth-of-binary-tree/
 * @Author: Gerrit Janssen 
 * @Date: 2023-01-13 16:24:54 
 * @Last Modified by: Gerrit Janssen
 * @Last Modified time: 2023-01-13 16:28:15
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
var maxDepth = function(root) {
    if(!root) return 0;

    // iterative solution using BFS
    let maxDepth = 0;   
    const bfs = node => {
        const queue = [node];
        while(queue.length) {
            const currLength = queue.length;
            maxDepth++;
            for(let i = 0; i < currLength; i++) {
                const n = queue.shift();
                if(n.left) queue.push(n.left);
                if(n.right) queue.push(n.right);
            }  
        }
    };

    bfs(root);
    return maxDepth;
};