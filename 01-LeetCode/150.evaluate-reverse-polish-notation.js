/* 150. Evaluate Reverse Polish Notation: https://leetcode.com/problems/evaluate-reverse-polish-notation/
 * @Author: Gerrit Janssen 
 * @Date: 2023-01-26 11:20:37 
 * @Last Modified by: Gerrit Janssen
 * @Last Modified time: 2023-01-26 11:21:00
 */

const operations = {
    "+": (a, b) => a + b,
    "-": (a, b) => a - b,
    "*": (a, b) => a * b,
    "/": (a, b) => a / b
};

/**
 * @param {string[]} tokens
 * @return {number}
 */
var evalRPN = function(tokens) {
    const stack = [];
    for(let i = 0; i < tokens.length; i++) {
        if(operations.hasOwnProperty(tokens[i])) {
            const [b, a] = [stack.pop(), stack.pop()];
            stack.push(Math.trunc(operations[tokens[i]](Number(a), Number(b))));
        } else stack.push(tokens[i]);
    }
    return stack.pop();
};