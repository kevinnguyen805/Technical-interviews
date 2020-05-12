// A country network consisting of N cities and N − 1 roads connecting them is given. Cities are labeled with distinct integers within the range [0..(N − 1)]. Roads connect cities in such a way that each distinct pair of cities is connected either by a direct road or through a path consisting of direct roads. There is exactly one way to reach any city from any other city. Starting out from city K, you have to plan a series of daily trips. Each day you want to visit a previously unvisited city in such a way that, on a route to that city, you will also pass through a maximal number of other unvisited cities (which will then be considered to have been visited). We say that the destination city is our daily travel target. In the case of a tie, you should choose the city with the minimal label. The trips cease when every city has been visited at least once. For example, consider K = 2 and the following network consisting of seven cities and six roads:


function solution(T) {
    // write your code in JavaScript (Node.js 8.9.4)
    
    let hash = {}
    
    hash[T[0] = []]
    
    for(let i = 1; i<T.length; i++){
        // condition - T[P] = Q && P !== 0    => P and Q         
        
        // T[i] = T[1] = 9
        // 1 = P / 9 = Q        - P !== 0 
        if(T[i] in hash){
            let Q = T[i]        // node 
            let P = i           // index
            
            hash[Q].push(P)
        } else {
            // T[3] = 2
            let Q = T[i]    // 2
            let P = i       // 3
            hash[Q] = []
            hash[Q].push(P)
        }
    }
    
//     { '0': [ 2, 6, 9 ],
//   '2': [ 3 ],
//   '3': [ 8 ],
//   '6': [ 4 ],
//   '8': [ 5, 7 ],
//   '9': [ 1 ] }

    let startingPath = hash[0]

    let results = 0
    
    for(let i = 0; i<startingPath.length; i++){
        let distance = 1
        let odd = true 
        
        let path = hash[startingPath[i]] // hash[2] = [3]
        
        while(odd && path){
            path = hash[path]
            distance++
        }
        
        results = Math.max(distance, results)
    }
    
    return results
}



/*
Network consisting of:
- N cities  ([0...N-1] - DISTINCT NUMBERS)
- N-1 roads (connecting them = edges)

Example:
- 10 cities
- 9 roads 

- Jack lives in (0)
- Wants to visit _as many cities as possible_ 
- Does _not want to visit a city more than once_

Condition: 
- You can only visit ONE odd-numbered city

Action:
DFS
- Traverse all possible routes (in-depth) until:
    - You hit 2nd odd-numbered city 