/* 1046. Last Stone Weight: https://leetcode.com/problems/last-stone-weight/
 * @Author: Gerrit Janssen 
 * @Date: 2023-01-15 16:21:06 
 * @Last Modified by: Gerrit Janssen
 * @Last Modified time: 2023-01-15 16:22:41
 */

/**
 * @param {number[]} stones
 * @return {number}
 */
var lastStoneWeight = function(stones) {
    if(stones.length === 1) return stones[0];

    // solution without heap: O(n*log n) time, O(n) space
    // let sortedStones = stones.sort((a, b) => a - b);
    // while(sortedStones.length > 1) {
    //     const y = sortedStones.pop();
    //     const x = sortedStones.pop();

    //     if(x === y) continue;
    //     else {
    //         const newStone = y - x;
    //         const index = binarySearch(sortedStones, newStone);
    //         sortedStones = [...sortedStones.slice(0, index), newStone, ...sortedStones.slice(index)];
    //     }
    // }

    // return sortedStones.length ? sortedStones.pop() : 0;

    // solution using max heap: O(n*log n) time, O(n) space
    const heap = new MaxHeap(stones);
    while(heap.size() > 1) {
        const y = heap.pop();
        const x = heap.pop();
        if(x !== y) heap.push(y - x);
    }

    return heap.size() ? heap.pop() : 0;
};

var binarySearch = function(arr, val) {
    let [l, r] = [0, arr.length - 1];
    while(l <= r) {
        let m = Math.floor((l + r) / 2);
        if(arr[m] === val) return m;
        else if(arr[m] > val) r = m - 1;
        else l = m + 1;
    }
    return l;
};

class Heap {
    constructor(values = [], type = "MAX") {
		this.data = [...values];
		this.type = type;

        this.buildHeap();        
    }
    
    size() {
        return this.data.length;
    }
    
    top() {
        return this.data[0];
    }
	
	buildHeap() {
		const n = this.size();
		for(let i = Math.floor(n / 2) - 1; i >= 0; i--) {
			this.heapifyDown(i);
		}	
		
	}
	
	heapifyDown(index) {
		const [l, r] = [2 * index + 1, 2 * index + 2]; 
		let p = index;
		
		if(l < this.size() && this.compare(l, p)) p = l;
		if(r < this.size() && this.compare(r, p)) p = r;
		if(p !== index) {
			[this.data[index], this.data[p]] = [this.data[p], this.data[index]];
			this.heapifyDown(p);
		}
	}
	
	heapifyUp(index) {
		const p = Math.floor((index - 1) / 2);

		if(this.compare(index, p)) {
			[this.data[index], this.data[p]] = [this.data[p], this.data[index]];
			this.heapifyUp(p);
		}
	}
	
	compare(index1, index2) {
		switch(this.type) {
			case "MAX": return this.data[index1] > this.data[index2];
			case "MIN": return this.data[index1] < this.data[index2];
		}
	}
    
    push(value) {
        this.data.push(value);
		this.heapifyUp(this.size() - 1);
    }
    
    pop() {
        [this.data[0], this.data[this.size() - 1]] = [this.data[this.size() - 1], this.data[0]];
        const top = this.data.pop();
		this.heapifyDown(0);
		return top;  
    }
}

class MaxHeap extends Heap {
	constructor(values) {
		super(values, "MAX");
	}
}
