// Given an array of integers, find the highest product you can get from 
// three of the integers.

// The input arrayOfInts will always have at least three integers.

//TODO - method 2 - keeping track of:
     // TODO - highestProductof3, highestProductof2, highest, lowestProductOf2, lowest 
var maximumProduct = function(nums) {
    if(nums.length < 3){
        return 0
    }
    
    // start at the 3rd item (index 2)
    // pre-populate highest and lowest based on the first 2 items
    let highest = Math.max(nums[0], nums[1])
    let lowest = Math.max(nums[0], nums[1])
    
    let highestProductOf2 = nums[0] * nums[1]
    let lowestProductOf2 = nums[0] * nums[1]
    
    let highestProductOf3 = nums[0]*nums[1]*nums[2]
    
    // walk through items, STARTING AT INDEX 2!!!
    for(let i = 2; i<nums.length; i++){
        let current = nums[i]
        
        highestProductOf3 = Math.max(highestProductOf3, current*highestProductOf2, current*lowestProductOf2)
        
        highestProductOf2 = Math.max(highestProductOf2, current*highest, current*lowest)
        
        lowestProductOf2 = Math.min(lowestProductOf2, current*highest, current*lowest)
        
        highest = Math.max(highest, current)
        
        lowest = Math.min(lowest, current)
    }
    
    return highestProductOf3
};



// TODO - attempt 1: sort the array and get the first/second number 
// TODO - multiply that by the last number and compare vs. the LAST 3 NUMBERS
var maximumProduct = function(nums) {
    if(nums.length < 3){
        return 0
    }
    
    nums.sort((a,b) => a-b)
    let tempProduct = 0
    if(nums[0] < 0 && nums[1] < 0){
        tempProduct = nums[0] * nums[1]
    }
    
    let length = nums.length 
    let results = 1
    results = Math.max(tempProduct*nums[length-1], nums[length-1]*nums[length-2]*nums[length-3])
    
    return results
};

// sort and get the last three numbers? - wrong, doesn't work for negative numbers
    // ex. [-4,-3,-2,-1,60]

// if we're dealing with negative numbers - we can only choose 2 negatives and 1 positive