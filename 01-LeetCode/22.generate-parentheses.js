/* 22. Generate Parentheses: https://leetcode.com/problems/generate-parentheses/
 * @Author: Gerrit Janssen 
 * @Date: 2023-01-26 11:21:32 
 * @Last Modified by: Gerrit Janssen
 * @Last Modified time: 2023-01-26 11:21:55
 */

/**
 * @param {number} n
 * @return {string[]}
 */
var generateParenthesis = function(n) {
    const res = [];
    const backtrack = (string, openN, closeN) => {
        if(string.length === n * 2){
            res.push(string);
            return;
        }

        if(openN < n) backtrack(string + "(", openN + 1, closeN);
        if(closeN < openN) backtrack(string + ")", openN, closeN + 1);
    };

    backtrack("(", 1, 0);
    return res;
};