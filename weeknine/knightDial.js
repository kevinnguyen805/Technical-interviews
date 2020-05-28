// A chess knight can move as indicated in the chess diagram below:

//  .           

 

// This time, we place our chess knight on any numbered key of a phone pad (indicated above), and the knight makes N-1 hops.  Each hop must be from one key to another numbered key.

// Each time it lands on a key (including the initial placement of the knight), it presses the number of that key, pressing N digits total.

// How many distinct numbers can you dial in this manner?

// Since the answer may be large, output the answer modulo 10^9 + 7.

// TODO - RECURSIVE SOLUTION

var knightDialer = function(N) {

    let mod = Math.pow(10,9) + 7

    let hash = {
        '1': [6,8],
        '2':[7,9],
        '3':[4,8],
        '4':[3,9,0],
        '5':[],
        '6':[1,7,0],
        '7':[2,6],
        '8':[1,3],
        '9':[2,4],
        '0':[4,6]
    }
    
    let cache = {}
    
    let count = (currentNumber, N) => {
        if(cache[N.toString(10) + currentNumber.toString(10)] !== undefined){
            return cache[N.toString(10) + currentNumber.toString(10)]
        }
        if(N === 1) return 1
        
        let sequences = 0      
        
        // grab the ARRAY value
        let currentKey = hash[currentNumber]        
        
        // iterate through each item in the ARRAY 
        for(let i = 0; i<currentKey.length; i++){
            sequences += count(currentKey[i], N-1) % mod
        }
        
        return cache[N.toString(10) + currentNumber.toString(10)] = sequences%mod
    }
    
    let results = 0
    for(let item in hash){
        results += count(item, N) % mod
    }
    
    return results %mod
};


// TODO - DFS SOLUTION
var knightDialer = function(N) {
    
    let max = Math.pow(10,9) + 7
    
    // the total number of unique paths to (i,j) for n hopes is equal to sum of unique paths from each valid position from which (i,j) can be reached n-1 hops 
    let paths = (i,j,n) => {
        
        if(i < 0 || j < 0 || i >= 4 || j >= 3 || (i==3 && j!=1)){
            return 0
        }
        
        if(n==1){
            return 1
        }
        
        
        let s = paths(i-1, j-2, n-1) % max + 
        paths(i-1, j+2, n-1) % max + 
        paths(i+1, j-2, n-1) % max + 
        paths(i+1, j+2, n-1) % max + 
        paths(i-2, j-1, n-1) % max + 
        paths(i-2, j+1, n-1) % max + 
        paths(i+2, j-1, n-1) % max + 
        paths(i+2, j+1, n-1) % max
        
        return s
    }
 
    let s = 0
    for(let i = 0; i<4; i++){
        for(let j = 0; j<3; j++){
            s = (s + paths(i,j,N) % max)
        }
    }
    
    return s
};




// TODO - DP SOLUTION
 var knightDialer = function(N) {
    
    // when given an adjacency list problem (each item has coordinate desintations)
    // write a function that gets the possible destinations
    let hash = {
        '1': [6,8],
        '2':[7,9],
        '3':[4,8],
        '4':[3,9,0],
        '5':[],
        '6':[1,7,0],
        '7':[2,6],
        '8':[1,3],
        '9':[2,4],
        '0':[4,6]
    }
    
    let dp = new Array(10).fill(1)
    
    while(N > 1){
        let next = new Array(10).fill(0)
        
        for(let i = 0; i<dp.length; i++){
            for(let neighbor of hash[i]){
                next[i] += dp[neighbor]
                next[i] %= (Math.pow(10,9) + 7)
            }
        }
        N--
        dp = next
    }
    
    let results = dp.reduce((acc,value) => {
       return acc + value 
    },0)
    
    return results % (Math.pow(10,9) + 7)    
};

// level 1: recursively generating numbers 
// 'the total number of unique paths for N hops is === the sum of total number of unique paths to each valid position from which (i,j) can be reached using n-1 hops'
// n-1 hops because when we start at (i,j) we've already made one hop
// therefore if we start n=1 --- (no hops) --- paths(i,j,n) = 1 

// next [
//   1, 0, 0, 0, 0,
//   0, 0, 0, 0, 0
// ]
// dp [
//   1, 1, 1, 1, 1,
//   1, 1, 1, 1, 1
// ]
// next [
//   2, 0, 0, 0, 0,
//   0, 0, 0, 0, 0
// ]
// dp [
//   1, 1, 1, 1, 1,
//   1, 1, 1, 1, 1
// ]
// next [
//   2, 1, 0, 0, 0,
//   0, 0, 0, 0, 0
// ]
// dp [
//   1, 1, 1, 1, 1,
//   1, 1, 1, 1, 1
// ]
// next [
//   2, 2, 0, 0, 0,
//   0, 0, 0, 0, 0
// ]
// dp [
//   1, 1, 1, 1, 1,
//   1, 1, 1, 1, 1
// ]
// next [
//   2, 2, 1, 0, 0,
//   0, 0, 0, 0, 0
// ]
// dp [
//   1, 1, 1, 1, 1,
//   1, 1, 1, 1, 1
// ]
// next [
//   2, 2, 2, 0, 0,
//   0, 0, 0, 0, 0
// ]
// dp [
//   1, 1, 1, 1, 1,
//   1, 1, 1, 1, 1
// ]
// next [
//   2, 2, 2, 1, 0,
//   0, 0, 0, 0, 0
// ]
// dp [
//   1, 1, 1, 1, 1,
//   1, 1, 1, 1, 1
// ]