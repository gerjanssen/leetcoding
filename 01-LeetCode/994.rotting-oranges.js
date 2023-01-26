/* 994. Rotting Oranges: https://leetcode.com/problems/rotting-oranges/
 * @Author: Gerrit Janssen 
 * @Date: 2023-01-26 20:53:05 
 * @Last Modified by:   Gerrit Janssen 
 * @Last Modified time: 2023-01-26 20:53:05 
 */

/**
 * @param {number[][]} grid
 * @return {number}
 */
var orangesRotting = function(grid) {
    let [m, n] = [grid.length, grid[0].length];
    const visited = new Array(m).fill().map(() => new Array(n).fill(null));

    const isGridPos = (x, y) => x >= 0 && x < m && y >= 0 && y < n;
    const bfs = (x, y) => {
        const directions = [[1, 0], [-1, 0], [0, 1], [0, -1]];
        const queue = [];

        queue.push([x, y, 0]);
        visited[x][y] = 0;

        while(queue.length) {
            const [x, y, t] = queue.shift();
            const _t = t + 1;

            directions.forEach(([dx, dy]) => {
                const [_x, _y] = [x + dx, y + dy];
                if(isGridPos(_x, _y) && grid[_x][_y] === 1 && (visited[_x][_y] === null || visited[_x][_y] > _t)) {
                    visited[_x][_y] = _t;
                    queue.push([_x, _y, _t]);
                }
            });
        }
    };

    for(let i = 0; i < m; i++) {
        for(let j = 0; j < n; j++) {
            if(grid[i][j] === 2) bfs(i, j);
        }
    }

    let time = 0;
    for(let i = 0; i < m; i++) {
        for(let j = 0; j < n; j++) {
            if(visited[i][j]) time = Math.max(time, visited[i][j]);
            else if(grid[i][j] === 1) return -1;
        }
    }

    return time
};