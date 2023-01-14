/* 36. Valid Sudoku: https://leetcode.com/problems/valid-sudoku/
 * @Author: Gerrit Janssen 
 * @Date: 2023-01-14 13:15:59 
 * @Last Modified by: Gerrit Janssen
 * @Last Modified time: 2023-01-14 13:20:48
 */

/**
 * @param {character[][]} board
 * @return {boolean}
 */
var isValidSudoku = function(board) {
    // solution checking the validity of each row, column and sub-square: O(9^2) time and space 

    let seen;
    for(let i = 0; i < 9; i++) {
        seen = new Set();
        for(let j = 0; j < 9; j++) {
            if(board[i][j] === ".") continue;
            else if(seen.has(board[i][j])) return false;
            seen.add(board[i][j]);
        }
    }

    for(let i = 0; i < 9; i++) {
        seen = new Set();
        for(let j = 0; j < 9; j++) {
            if(board[j][i] === ".") continue;
            else if(seen.has(board[j][i])) return false;
            seen.add(board[j][i]);
        }
    }

    for(let i = 0; i < 9; i++) {
        seen = new Set();
        for(let j = 0; j < 9; j++) {
            let row = Math.floor(i / 3) * 3 + Math.floor(j / 3);
            let col = (i % 3) * 3 + j % 3;
            if(board[row][col] === ".") continue;
            else if(seen.has(board[row][col])) return false;
            seen.add(board[row][col]);
        }
    }

    return true;
};