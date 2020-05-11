// Given an integer array arr, count how many elements x there are, such that x + 1 is also in arr.

var countElements = function(arr) {
    // keep track of each number 
    let results = 0
    let hash = {}
    for(let i = 0; i<arr.length; i++){
        if(!(arr[i] in hash)){
            hash[arr[i]] = 1
        } else {
            hash[arr[i]]++
        }
    }
    for(let i=0; i<arr.length; i++){
        let num = arr[i] + 1
        if(num in hash){
            results++
        }
    }
    
    return results
};