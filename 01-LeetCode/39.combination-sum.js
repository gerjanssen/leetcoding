/* 39. Combination Sum: https://leetcode.com/problems/combination-sum/
 * @Author: Gerrit Janssen 
 * @Date: 2023-01-26 20:44:43 
 * @Last Modified by:   Gerrit Janssen 
 * @Last Modified time: 2023-01-26 20:44:43 
 */

/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum = function(candidates, target) {
    const res = []
    const backtrack = (selected, sum, index) => {
        if(sum > target) return;
        else if(sum === target){
            res.push([...selected])
            return;
        }

        for(let i = index; i < candidates.length; i++) {
            selected.push(candidates[i]);
            backtrack(selected, sum + candidates[i], i);
            selected.pop();
        }
    };

    backtrack([], 0, 0);
    return res;
};