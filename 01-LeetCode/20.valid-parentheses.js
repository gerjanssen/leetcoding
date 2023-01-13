/* 20. Valid Parentheses: https://leetcode.com/problems/valid-parentheses/
 * @Author: Gerrit Janssen 
 * @Date: 2023-01-13 15:52:52 
 * @Last Modified by: Gerrit Janssen
 * @Last Modified time: 2023-01-13 15:55:56
 */

// mapping of valid opening parenthesis to a closing parenthesis
const p = {
    ")": "(",
    "}": "{",
    "]": "["
};

/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
    // solution using a stack: O(n) time, O(n) space
    const stack = [];
    for(let i = 0; i < s.length; i++) {
        if(s[i] === "(" || s[i] === "{" || s[i] === "[") stack.push(s[i]);
        else if(stack.pop() !== p[s[i]]) return false;
    }
    
    return stack.length === 0;
};