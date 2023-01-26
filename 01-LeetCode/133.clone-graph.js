/* 133. Clone Graph: https://leetcode.com/problems/clone-graph/
 * @Author: Gerrit Janssen 
 * @Date: 2023-01-26 20:50:29 
 * @Last Modified by:   Gerrit Janssen 
 * @Last Modified time: 2023-01-26 20:50:29 
 */

/**
 * // Definition for a Node.
 * function Node(val, neighbors) {
 *    this.val = val === undefined ? 0 : val;
 *    this.neighbors = neighbors === undefined ? [] : neighbors;
 * };
 */

/**
 * @param {Node} node
 * @return {Node}
 */
var cloneGraph = function(node) {
    if(!node) return null;

    const nodes = new Map([[node, new Node(node.val)]]);
    const stack = [node];
    while(stack.length) {
        const n = stack.pop();
        const newN = nodes.get(n);
        n.neighbors.forEach(nb => {
            let newNb = nodes.get(nb);
            if(!newNb) {
                newNb = new Node(nb.val);
                nodes.set(nb, newNb);
                stack.push(nb);
            }
            newN.neighbors.push(newNb);
        });
    }

    return nodes.get(node);
};