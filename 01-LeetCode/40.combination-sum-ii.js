/* 40. Combination Sum II: https://leetcode.com/problems/combination-sum-ii/
 * @Author: Gerrit Janssen 
 * @Date: 2023-01-26 20:47:03 
 * @Last Modified by:   Gerrit Janssen 
 * @Last Modified time: 2023-01-26 20:47:03 
 */

/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum2 = function(candidates, target) {
    candidates = candidates.sort((a, b) => a - b);
    const res = [];
    const backtrack = (selected, sum, index) => {
        if(sum > target || index > candidates.length) return;
        else if(sum === target) {
            res.push([...selected]);
            return;
        }

        // take candidate at index
        selected.push(candidates[index]);
        backtrack(selected, sum + candidates[index], index + 1);
        selected.pop();

        // don't take candidate at index (also skip all candidates with same number)
        let i = index + 1;
        for(i; i < candidates.length; i++) {
            if(candidates[i] !== candidates[index]) break;
        }
        backtrack(selected, sum, i);
    };

    backtrack([], 0, 0);
    return res;
};