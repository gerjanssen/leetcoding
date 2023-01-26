/* 200. Number of Islands: https://leetcode.com/problems/number-of-islands/
 * @Author: Gerrit Janssen 
 * @Date: 2023-01-26 20:49:40 
 * @Last Modified by: Gerrit Janssen
 * @Last Modified time: 2023-01-26 20:50:08
 */

/**
 * @param {character[][]} grid
 * @return {number}
 */
var numIslands = function(grid) {
    const [m, n] = [grid.length, grid[0].length];
    const directions = [[0, 1], [0, -1], [1, 0], [-1, 0]];
    let count = 0;

    // discover adjacent 1s using bfs
    const discover = (r, c) => {
        const queue = [];
        queue.push([r, c]);
        while(queue.length) {
            const [r, c] = queue.shift();
            directions.forEach(([dr, dc]) => {
                const [_r, _c] = [r + dr, c + dc];
                if(_r >= 0 && _r < m && _c >= 0 && _c < n && grid[_r][_c] === "1") {
                    queue.push([_r, _c]);
                    grid[_r][_c] = "X";
                }
            });
        }
    };

    for(let i = 0; i < m; i++){
        for(let j = 0; j < n; j++) {
            if(grid[i][j] === "1") {
                count++;
                discover(i, j);
            }
        }
    }
    
    return count;
};