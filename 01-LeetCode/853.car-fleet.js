/* 853. Car Fleet: https://leetcode.com/problems/car-fleet/
 * @Author: Gerrit Janssen 
 * @Date: 2023-01-26 11:23:14 
 * @Last Modified by: Gerrit Janssen
 * @Last Modified time: 2023-01-26 11:23:39
 */

/**
 * @param {number} target
 * @param {number[]} position
 * @param {number[]} speed
 * @return {number}
 */
var carFleet = function(target, position, speed) {
    const speedMapping = new Map();
    for(let i = 0; i < position.length; i++) {
        speedMapping.set(position[i], speed[i]);
    }
    position.sort((a, b) => b - a);

    let fleetCount = 0;
    let currentFleetArrival = timeToTarget(target, position[0], speedMapping.get(position[0]));
    for(let i = 1; i < position.length; i++) {
        const arrival = timeToTarget(target, position[i], speedMapping.get(position[i]));
        if(arrival > currentFleetArrival) {
            currentFleetArrival = arrival;
            fleetCount++;
        }
    }

    return ++fleetCount;
};

var timeToTarget = function(target, position, speed) {
    return (target - position) / speed;
};