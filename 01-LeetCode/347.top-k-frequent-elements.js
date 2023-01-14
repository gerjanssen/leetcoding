/* 347. Top K Frequent Elements: https://leetcode.com/problems/top-k-frequent-elements/
 * @Author: Gerrit Janssen 
 * @Date: 2023-01-14 12:51:41 
 * @Last Modified by: Gerrit Janssen
 * @Last Modified time: 2023-01-14 13:14:58
 */

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var topKFrequent = function(nums, k) {
    // solution without sorting: O(n) time, O(n) space

    // create a hash map storing the occurence of each number in nums
    const counts = {}
    for(let i = 0; i < nums.length; i++) {
        const num = nums[i];
        if(counts.hasOwnProperty(num)) counts[num]++;
        else counts[num] = 1;
    }

    // create an array storing the number at position matching the occurence of that number
    const buckets = new Array(nums.length + 1);
    for(let key in counts) {
        const count = counts[key];
        if(buckets[count]) buckets[count].push(key);
        else buckets[count] = [key];
    }

    // loop through the array in reverse getting the top k frequent numbers
    const res = [];
    for(let i = buckets.length; i >= 0; i--) {
        while(buckets[i] && buckets[i].length && res.length < k) res.push(buckets[i].pop());
        if(res.length === k) break;
    }

    return res;
};