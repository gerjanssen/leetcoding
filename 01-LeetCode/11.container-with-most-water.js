/* 11. Container With Most Water: https://leetcode.com/problems/container-with-most-water/
 * @Author: Gerrit Janssen 
 * @Date: 2023-01-26 11:17:24 
 * @Last Modified by: Gerrit Janssen
 * @Last Modified time: 2023-01-26 11:18:13
 */

/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function(height) {
    if(height.length === 2) return Math.min(height[0], height[1]);

    let [l, r] = [0, height.length - 1];
    let maxA = 0;
    while(l < r){
        maxA = Math.max(maxA, Math.min(height[l], height[r]) * (r - l));

        if(height[l] < height[r]) l++;
        else r--;
    }

    return maxA;
};