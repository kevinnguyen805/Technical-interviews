// Say you have an array for which the ith element is the price of a given stock on day i.

// If you were only permitted to complete at most one transaction (i.e., buy one and sell one share of the stock), design an algorithm to find the maximum profit.

// Note that you cannot sell a stock before you buy one.

// Example 1:

// Input: [7,1,5,3,6,4]
// Output: 5
// Explanation: Buy on day 2 (price = 1) and sell on day 5 (price = 6), profit = 6-1 = 5.
//              Not 7-1 = 6, as selling price needs to be larger than buying price.
// Example 2:

// Input: [7,6,4,3,1]
// Output: 0
// Explanation: In this case, no transaction is done, i.e. max profit = 0.

function maxProfit(arr){
     if(arr.length === 0) return 0

     let buyLow = Number.MAX_VALUE 
     let profits = 0

     for(let i = 0; i<arr.length; i++){
          // for each - we are seeing if the current item is lower than current low (which means buy)
          if(arr[i] < buyLow){
               buyLow = arr[i]
          } else {
               // if the item is larger than buyLow -- calculate profits and COMPARE TO GET MAX VALUE  
               profits = Math.max(profits, arr[i] - buyLow)
          }
     }

     return profits
}


var maxProfit = function(arr) {
    if(arr.length === 0){
        return 0
    }
    
    let current = Number.MAX_VALUE 
    let profits = -Number.MAX_VALUE 
    
    for(let i = 0; i<arr.length; i++){
        current = Math.min(arr[i], current)
        profits = Math.max(profits, arr[i]-current)
        
        console.log('current', current)
        console.log('profits', profits)
    }
    
    return profits
};




    let lowest = Number.MAX_VALUE
	let highest = Number.MIN_VALUE
	let profits = 0

	for(let i = 0; i<arr.length; i++){
		if(arr[i] < lowest){
			lowest = arr[i]
		} else {
			highest = arr[i]
			profits = Math.max(profits, highest - lowest)
		}
    }

	return profits