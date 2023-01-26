/* 739. Daily Temperatures: https://leetcode.com/problems/daily-temperatures/
 * @Author: Gerrit Janssen 
 * @Date: 2023-01-26 11:22:23 
 * @Last Modified by:   Gerrit Janssen 
 * @Last Modified time: 2023-01-26 11:22:23 
 */

/**
 * @param {number[]} temperatures
 * @return {number[]}
 */
var dailyTemperatures = function(temperatures) {
    const res = new Array(temperatures.length).fill(0);
    const stack = [];
    for(let i = 0; i < temperatures.length; i++) {
        while(stack.length > 0 && stack[stack.length - 1][0] < temperatures[i]) {
            const [, _i] = stack.pop();
            res[_i] = i - _i;
        }
        stack.push([temperatures[i], i]);
    }
    return res;
};