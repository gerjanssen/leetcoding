/* 125. Valid Palindrome: https://leetcode.com/problems/valid-palindrome/
 * @Author: Gerrit Janssen 
 * @Date: 2023-01-13 15:29:29 
 * @Last Modified by: Gerrit Janssen
 * @Last Modified time: 2023-01-13 15:39:01
 */

/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function(s) {
    s = Array.from(s).filter(c => /[0-9a-zA-Z]/.test(c)).join("").toLowerCase();
    
    // solution using left and right pointer: O(n) time, O(1) space
    let [l, r] = [0, s.length - 1];
    while(l <= r) {
        if(s[l] !== s[r]) return false;
        l++;
        r--;
    }

    return true;
};
