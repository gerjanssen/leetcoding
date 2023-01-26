/* 17. Letter Combinations of a Phone Number: https://leetcode.com/problems/letter-combinations-of-a-phone-number/
 * @Author: Gerrit Janssen 
 * @Date: 2023-01-26 20:48:27 
 * @Last Modified by:   Gerrit Janssen 
 * @Last Modified time: 2023-01-26 20:48:27 
 */

/**
 * @param {string} digits
 * @return {string[]}
 */
var letterCombinations = function(digits) {
    const map = {
        2: "abc",
        3: "def",
        4: "ghi",
        5: "jkl",
        6: "mno",
        7: "pqrs",
        8: "tuv",
        9: "wxyz",
    };
    const res = [];
    const backtrack = (s, i) => {
        if(i === digits.length){
            res.push(s);
            return;
        }
        
        const chars = map[digits[i]];
        for(let j = 0; j < chars.length; j++) {
            backtrack(s + chars[j], i + 1);
        }
    };

    if(!digits) return res;
    else backtrack("", 0);

    return res;
};