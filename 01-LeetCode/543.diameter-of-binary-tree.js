/* 543. Diameter of Binary Tree: 543. Diameter of Binary Tree
 * @Author: Gerrit Janssen 
 * @Date: 2023-01-14 12:35:23 
 * @Last Modified by: Gerrit Janssen
 * @Last Modified time: 2023-01-14 12:35:48
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
var diameterOfBinaryTree = function(root) {
    if(root === null) return 0;
    
    let maxDiameter = 0;
    const helper = node => {
        if(!node) return -1;
        const heightLeft = helper(node.left);
        const heightRight = helper(node.right);
        
        maxDiameter = Math.max(maxDiameter, heightLeft + heightRight + 2);
        return 1 + Math.max(heightLeft, heightRight);
    };

    helper(root);
    return maxDiameter;
};