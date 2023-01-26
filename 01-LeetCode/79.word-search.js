/* 79. Word Search: https://leetcode.com/problems/word-search/
 * @Author: Gerrit Janssen 
 * @Date: 2023-01-26 20:47:38 
 * @Last Modified by: Gerrit Janssen
 * @Last Modified time: 2023-01-26 20:47:58
 */

/**
 * @param {character[][]} board
 * @param {string} word
 * @return {boolean}
 */
var exist = function(board, word) {
    const [m, n] = [board.length, board[0].length];
    const directions = [[0, 1], [0, -1], [1, 0], [-1, 0]];
    
    const dfs = (r, c, i) => {
        if(board[r][c] !== word[i]) return false;
        else if(i === word.length - 1) return true;

        board[r][c] = null;
        for(const [dr, dc] of directions) {
            const [_r, _c] = [r + dr, c + dc];
            if(_r >= 0 && _r < m && _c >= 0 && _c < n) {
                if(dfs(_r, _c, i + 1)) return true;
            }
        }
        board[r][c] = word[i];
        return false;
    };
    
    for(let i = 0; i < m; i++) {
        for(let j = 0; j < n; j++) {
            if(dfs(i, j, 0)) return true;
        }
    }

    return false;
};