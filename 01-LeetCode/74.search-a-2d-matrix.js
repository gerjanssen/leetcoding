/* 74. Search a 2D Matrix: https://leetcode.com/problems/search-a-2d-matrix/
 * @Author: Gerrit Janssen 
 * @Date: 2023-01-26 11:24:27 
 * @Last Modified by: Gerrit Janssen
 * @Last Modified time: 2023-01-26 11:24:54
 */

/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */
var searchMatrix = function(matrix, target) {
    const [m, n] = [matrix.length, matrix[0].length];
    let [t, b, l, r] = [0, m - 1, 0, n - 1];
    let row, col;

    while(t <= b) {
        row = t + Math.floor((b - t) / 2);
        if(matrix[row][0] > target) b = row - 1;
        else if(matrix[row][n - 1] < target) t = row + 1;
        else break;
    }

    while(l <= r) {
        col = l + Math.floor((r - l) / 2);
        if(matrix[row][col] === target) return true;
        else if(matrix[row][col] > target) r = col - 1;
        else l = col + 1; 
    }
    
    return false;
};