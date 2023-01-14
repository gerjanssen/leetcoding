/* 49. Group Anagrams: https://leetcode.com/problems/group-anagrams/
 * @Author: Gerrit Janssen 
 * @Date: 2023-01-14 12:42:25 
 * @Last Modified by: Gerrit Janssen
 * @Last Modified time: 2023-01-14 12:48:34
 */

/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function(strs) {
    // solution using hash map to store the groups of anagrams; 
    // the keys represent the number of occurrences of each letter of the alphabet in the string
    // O(n*k) time, O(n) space, where n is the size of the input array and k is the size of the longest string in the input array

    const startCharCode = "a".charCodeAt(0);
    const groups = {};
    
    for(let i = 0; i < strs.length; i++) {
        const str = strs[i];
        const counts = new Array(26).fill(0);
        for(let j = 0; j < str.length; j++) {
            counts[str[j].charCodeAt() - startCharCode]++;
        }
        const enc = counts.join(",");

        if(groups.hasOwnProperty(enc)) groups[enc].push(str);
        else groups[enc] = [str];
    }

    return Object.values(groups);
};