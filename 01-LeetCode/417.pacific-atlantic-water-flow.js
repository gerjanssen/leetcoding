/* 417. Pacific Atlantic Water Flow: https://leetcode.com/problems/pacific-atlantic-water-flow/
 * @Author: Gerrit Janssen 
 * @Date: 2023-01-26 20:51:51 
 * @Last Modified by:   Gerrit Janssen 
 * @Last Modified time: 2023-01-26 20:51:51 
 */

/**
 * @param {number[][]} heights
 * @return {number[][]}
 */
var pacificAtlantic = function(heights) {
    const [rows, cols] = [heights.length, heights[0].length];
    const directions = [[1, 0], [-1, 0], [0, 1], [0, -1]];
    const visitedP = new Array(rows).fill().map(() => new Array(cols).fill(null));
    const visitedA = new Array(rows).fill().map(() => new Array(cols).fill(null));

    const bordersP = (x, y) => x === 0 || y === 0; // (x, y) borders the Pacific Ocean
    const bordersA = (x, y) => x === rows - 1 || y === cols - 1; // (x, y) borders the Atlantic Ocean
    const isLand = (x, y) => x >= 0 && x < rows && y >= 0 && y < cols; // (x, y) is land
    const isHigher = (x1, y1, x2, y2) => heights[x1][y1] >= heights[x2][y2];  // (x1, y1) is higher than (x2, y2)

    const bfs = (x, y, visited) => {
        const queue = [];

        queue.push([x, y]);
        visited[x][y] = true;
        while(queue.length) {
            const [x, y] = queue.shift();

            directions.forEach(([dx, dy]) => {
                const [_x, _y] = [x + dx, y + dy];
                if(isLand(_x, _y) && isHigher(_x, _y, x, y) && visited[_x][_y] === null) {
                    visited[_x][_y] = true;
                    queue.push([_x, _y]);
                }
            });
        }
    };

    for(let r = 0; r < rows; r++) {
        for(let c = 0; c < cols; c++) {
            if(bordersP(r, c) && visitedP[r][c] === null) bfs(r, c, visitedP);
            if(bordersA(r, c) && visitedA[r][c] === null) bfs(r, c, visitedA);
        }
    }

    const res = [];
     for(let r = 0; r < rows; r++) {
        for(let c = 0; c < cols; c++) {
            if(visitedP[r][c] && visitedA[r][c]) res.push([r, c]);
        }
    }

    return res;
};