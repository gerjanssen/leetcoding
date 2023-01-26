/* 207. Course Schedule: https://leetcode.com/problems/course-schedule/
 * @Author: Gerrit Janssen 
 * @Date: 2023-01-26 20:53:38 
 * @Last Modified by:   Gerrit Janssen 
 * @Last Modified time: 2023-01-26 20:53:38 
 */

/**
 * @param {number} numCourses
 * @param {number[][]} prerequisites
 * @return {boolean}
 */
var canFinish = function(numCourses, prerequisites) {
    if(prerequisites.length === 0) return true;

    const nodes = buildAdjacencyList(prerequisites);

    const dfs = (node, visited) => {
        if(visited.has(node)) return false;

        const nbs = nodes.get(node);
        if(nbs.size === 0) return true;

        visited.add(node);
        for(const nb of nbs) {
            if(!dfs(nb, visited)) return false;
        }
        visited.delete(node);
        nbs.clear();
        nodes.set(node, nbs);
        return true;
    };

    for(let i = 0; i < numCourses; i++) {
        if(nodes.has(i) && !dfs(i, new Set())) return false;
    }
    return true;
};

var buildAdjacencyList = function(edges) {
    const adjList = new Map();
    edges.forEach(([n1, n2]) => {
        if(adjList.has(n1)){
            const nbs = adjList.get(n1);
            nbs.add(n2);
            adjList.set(n1, nbs);
        } else {
            adjList.set(n1, new Set([n2]));
        }

        if(!adjList.has(n2)) adjList.set(n2, new Set());
    });
    return adjList;
};