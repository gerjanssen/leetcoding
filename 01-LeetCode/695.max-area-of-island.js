/* 695. Max Area of Island: https://leetcode.com/problems/max-area-of-island/
 * @Author: Gerrit Janssen 
 * @Date: 2023-01-26 20:51:10 
 * @Last Modified by:   Gerrit Janssen 
 * @Last Modified time: 2023-01-26 20:51:10 
 */

/**
 * @param {number[][]} grid
 * @return {number}
 */
var maxAreaOfIsland = function(grid) {
    const [m, n] = [grid.length, grid[0].length];
    let maxArea = 0;
    
    const bfs = (x, y) => {
        const directions = [[0, 1], [0, -1], [1, 0], [-1, 0]];  
        const queue = [];
        let area = 0;

        queue.push([x, y]);
        grid[x][y] = -1;
        while(queue.length) {
            const [r, c] = queue.shift();
            directions.forEach(([dr, dc]) => {
                const [_r, _c] = [r + dr, c + dc];
                if(_r >= 0 && _r < m && c >= 0 && _c < n && grid[_r][_c] === 1) {
                    queue.push([_r, _c]);
                    grid[_r][_c] = -1;
                }
            });
            area++;
        }
        maxArea = Math.max(maxArea, area);
    };

    for(let i = 0; i < m; i++) {
        for(let j = 0; j < n; j++) {
            if(grid[i][j] === 1) bfs(i, j);
        }
    }

    return maxArea;
};