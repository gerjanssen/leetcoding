/* 155. Min Stack: https://leetcode.com/problems/min-stack/
 * @Author: Gerrit Janssen 
 * @Date: 2023-01-26 11:19:20 
 * @Last Modified by: Gerrit Janssen
 * @Last Modified time: 2023-01-26 11:19:55
 */


var MinStack = function() {
    this.stack = [];
};

/** 
 * @param {number} val
 * @return {void}
 */
MinStack.prototype.push = function(val) {
    this.stack.push([val, Math.min(val, this.stack.length ? this.getMin() : Infinity)]);
};

/**
 * @return {void}
 */
MinStack.prototype.pop = function() {
    this.stack.pop();
};

/**
 * @return {number}
 */
MinStack.prototype.top = function() {
    return this.stack[this.stack.length - 1][0];
};

/**
 * @return {number}
 */
MinStack.prototype.getMin = function() {
    return this.stack[this.stack.length - 1][1];
};

/** 
 * Your MinStack object will be instantiated and called as such:
 * var obj = new MinStack()
 * obj.push(val)
 * obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.getMin()
 */