/* 875. Koko Eating Bananas: https://leetcode.com/problems/koko-eating-bananas/
 * @Author: Gerrit Janssen 
 * @Date: 2023-01-26 11:25:23 
 * @Last Modified by:   Gerrit Janssen 
 * @Last Modified time: 2023-01-26 11:25:23 
 */

/**
 * @param {number[]} piles
 * @param {number} h
 * @return {number}
 */
var minEatingSpeed = function(piles, h) {
    if(h === piles.length) return Math.max(...piles);

    const canEatAll = (k) => {
        let hours = 0;
        for(let i = 0; i < piles.length; i++) {
            hours += Math.ceil(piles[i] / k);
            if(hours > h) return false;
        }
        return true;
    };

    let [min, max] = [1, Math.max(...piles)];
    while(min < max) {
        const m = min + Math.floor((max - min) / 2);
        if(canEatAll(m)) max = m;
        else min = m + 1
    }
    
    return min;
};