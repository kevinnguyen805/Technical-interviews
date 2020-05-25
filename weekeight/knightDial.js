// A chess knight can move as indicated in the chess diagram below:

//  .           

 

// This time, we place our chess knight on any numbered key of a phone pad (indicated above), and the knight makes N-1 hops.  Each hop must be from one key to another numbered key.

// Each time it lands on a key (including the initial placement of the knight), it presses the number of that key, pressing N digits total.

// How many distinct numbers can you dial in this manner?

// Since the answer may be large, output the answer modulo 10^9 + 7.

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