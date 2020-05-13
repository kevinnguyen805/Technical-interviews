// Given a list of airline tickets represented by pairs of departure and arrival airports [from, to], reconstruct the itinerary in order. All of the tickets belong to a man who departs from JFK. Thus, the itinerary must begin with JFK.

// Note:

// If there are multiple valid itineraries, you should return the itinerary that has the smallest lexical order when read as a single string. For example, the itinerary ["JFK", "LGA"] has a smaller lexical order than ["JFK", "LGB"].
// All airports are represented by three capital letters (IATA code).
// You may assume all tickets form at least one valid itinerary.
// Example 1:

// Input: [["MUC", "LHR"], ["JFK", "MUC"], ["SFO", "SJC"], ["LHR", "SFO"]]
// Output: ["JFK", "MUC", "LHR", "SFO", "SJC"]
// Example 2:

// Input: [["JFK","SFO"],["JFK","ATL"],["SFO","ATL"],["ATL","JFK"],["ATL","SFO"]]
// Output: ["JFK","ATL","JFK","SFO","ATL","SFO"]
// Explanation: Another possible reconstruction is ["JFK","SFO","ATL","JFK","ATL","SFO"].
//              But it is larger in lexical order.

//TODO - FINAL ANSWER
//TODO - (1) map out all the departures -> destination arrays (2) sort the array for lexical order (3) DFS - add items starting at the end of the route 
var findItinerary = function(tickets) {
    let hash = {}
    for(let i = 0; i<tickets.length; i++){
        let [departure, destination] = tickets[i]
        
        if(departure in hash){
            hash[departure].push(destination)
        } else {
            hash[departure] = [destination]
        }
    }
    
    for(let location in hash){
        hash[location].sort()
    }
    
    let results = []
    
    let dfs = function(departure){
        let destinations = hash[departure]
        
        while(destinations && destinations.length > 0){
            let nextDestination = destinations.shift() 
            //TODO - SHIFT() breaks the recursion by ensuring we only visit each element once
            //TODO - in contrast - using for(let item of array) --- iterating through each array will create infinite loop 
               // TODO - BECAUSE WE CAN'T CHECK IF WE'VE ALREADY VISITED IT

            dfs(nextDestination)      //TODO - DFS RIGHT HERE - RECURSION STARTS HERE!!
        }
        results.push(departure)
    }
    
    dfs('JFK')
    return results.reverse()
};

//TODO build a map to store each departure location and its destinations array.
//TODO sort the destinations array.
//TODO now we assume that the departure airport 'JFK' is the root node for this tree, and its destinations are the children. Since the destinations are sorted, the children are arranged alfabetically from left to right. For each destination, if it is also a departure airport, then its children are the related destinations. Hopefully by now you get an idea of the structure of the tree.
//TODO run a post order traversal of the tree , as a result, 'JFK' now is the last airport visited, hence the Greedy part.
//TODO finally we reverse the result as the return value.

/*

Greedy strategy + post order traversal

1. Build a map to store --- [departure : destination]
2. sort the destinations array (why?)

3. assume that the departure airpot JFK is the root node for this tree (destination = child)
    - since the destinations are sorted, the children are arranged ALPHABETICALLY (from left to right)
    - for each destination - IF THERE IS ALSO A DEPARTURE AIRPORT - then its children are the related destination 
*/


// TODO - DISCLAIMER - THIS SOLUTION IS WRONG
var findItinerary = function(tickets) {

    // build a map to store each departure location and destination array
    let hash = {}
    for(let i = 0; i<tickets.length; i++){
        let [departure, destination] = tickets[i]
        
        if(departure in hash){
            hash[departure].push(destination)
        } else {
            hash[departure] = [destination]
        }
    }
    
    // sort the arrays because of lexical order
    for(let location in hash){
        hash[location].sort()
    }

    let results = []
    // now we have destination - lets go through them 
    let dfs = function(departure){
        
        // list of destinations we can go to in alphabetical order
        let destination = hash[departure] // ex. ['ATL', 'SFO']
        
        console.log(departure, destination)
        while(destination && destination.length > 0){
            // while there exists a destination and its other lengths are 1+ 
            let nextDestination = destination.shift() // take out the first destination 
            
            // go into that
            dfs(nextDestination) // dfs('ATL') -> ['JFK', 'SFO'] -> dfs('JFK') -> ['SFO']
        }
        results.push(departure) // TODO  BECAUSE THIS IS DFS - EVERYTHING IS IN REVERSE
        // TODO YOU'RE PUSHING THE CHILDREN (BOTTOM LEAF) IN FIRST - ONCE EVERYTHING IS DONE RUNNING, THEN THE FIRST ITEM (JFK) IS ADDED
    }
    
    dfs('JFK')
    
    return results.reverse() 
};

var findItinerary = function(tickets) {
    let hash = {}
    let results = []
    
    for(let i = 0; i<tickets.length; i++){
        let departure = tickets[i][0]
        let destination = tickets[i][1]
        
        if(departure in hash){
            hash[departure].push(destination)
        } else {
            hash[departure] = [destination]
        }
    }
    // FOR IN LOOP ALLOWS YOU TO INTERATE AN OBJECT 
    for(let location in hash){
        hash[location].sort()        // sort each array
    }
    // post order tree traversal --> leftChild - rightChild - root
    let dfs = function(node){          // departure node 
        let destination = hash[node]      // destination node 
        
        while(destination && destination.length > 0){
            // dfs(destination.shift())
            let newDeparture = destination.shift() 
            dfs(newDeparture)
        }
        results.push(node)
    }
    
    dfs('JFK')
    return results.reverse()
};



var findItinerary = function(tickets) {
    
    let hash = {}
    
    for(let i = 0; i<tickets.length; i++){
        let [depart, arrive] = tickets[i]
        hash[depart] = arrive 
    }
    
    let results = []
    let key = 'JFK'
    results.push(key)
    
    while(hash[key]){
        results.push(hash[key])
        key = hash[key]
    }
    
    return results
};
