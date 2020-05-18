// Write an efficient function that takes stockPrices and returns the best
// profit I could have made from one purchase and one sale of one share of 
// Apple stock yesterday.

// For example:

//   const stockPrices = [10, 7, 5, 8, 11, 9];

// getMaxProfit(stockPrices);
// Returns 6 (buying for $5 and selling for $11)


// pretty much the buy stocks functoin

function getMaxProfit(prices){
     // prices = [10,7,5,8,11,9]

     // iterate through each stock
     // if it is less than the SMALLEST NUMBER we've seen - replace it
     // if not, get the difference and use Math.max to track biggest profit

     let profit = -Number.MAX_VALUE
     let smallest = Number.MAX_VALUE

     for(let i = 0; i<prices.length; i++){
          if(prices[i] < smallest){
               smallest = prices[i]
          } else {
               let currentProfit = prices[i] - smallest
               profit = Math.max(currentProfit, profit)
          }
     }
     return profit
}