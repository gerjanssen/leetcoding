/* 242. Valid Anagram: https://leetcode.com/problems/valid-anagram/
 * @Author: Gerrit Janssen 
 * @Date: 2023-01-12 21:32:25 
 * @Last Modified by: Gerrit Janssen
 * @Last Modified time: 2023-01-12 21:35:39
 */

/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
 var isAnagram = function(s, t) {
    if(s.length !== t.length) return false;

    // solution using hash map: O(n) time, O(n) space
    const count = {};
    for(let i = 0; i < s.length; i++) {
        count[s[i]] = (count[s[i]] || 0) + 1;
        count[t[i]] = (count[t[i]] || 0) - 1; 
    }

    for(let key in count) {
        if(count[key] !== 0) return false;
    }

    return true;
};