/* 130. Surrounded Regions: https://leetcode.com/problems/surrounded-regions/
 * @Author: Gerrit Janssen 
 * @Date: 2023-01-26 20:52:27 
 * @Last Modified by:   Gerrit Janssen 
 * @Last Modified time: 2023-01-26 20:52:27 
 */

/**
 * @param {character[][]} board
 * @return {void} Do not return anything, modify board in-place instead.
 */
var solve = function(board) {
    const [m, n] = [board.length, board[0].length];
    const visited = new Array(m).fill().map(() => new Array(n).fill(false));
    const directions = [[0, 1], [0, -1], [1, 0], [-1, 0]];

    const isValidPosition = (r, c) => r >= 0 && r < m && c >= 0 && c < n;
    const isEdgePosition = (r, c) => r === 0 || r === m - 1 || c === 0 || c === n - 1;

    const dfs = (r, c) => {
        const stack = [];

        visited[r][c] = true;
        stack.push([r, c]);
        
        while(stack.length) {
            const [r, c] = stack.pop();

            for(let i = 0; i < directions.length; i++) {
                const [dr, dc] = directions[i];
                const [_r, _c] = [r + dr, c + dc];

                if(isValidPosition(_r, _c) && board[_r][_c] === "O" && !visited[_r][_c]) {
                    visited[_r][_c] = true;
                    stack.push([_r, _c]);
                }
            }
        }
    };

    for(let i = 0; i < m; i++) {
        for(let j = 0; j < n; j++) {
            if(board[i][j] === "O" && isEdgePosition(i, j) && !visited[i][j]) dfs(i, j);
        }
    }

    for(let i = 0; i < m; i++) {
        for(let j = 0; j < n; j++) {
            if(board[i][j] === "O" && !visited[i][j]) board[i][j] = "X";
        }
    }
};