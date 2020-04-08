// Given a list of daily temperatures T, return a list such that, for each day in the input, tells you how many days you would have to wait until a warmer temperature.If there is no future day for which this is possible, put 0 instead.

// For example, given the list of temperatures T = [73, 74, 75, 71, 69, 72, 76, 73], your output should be[1, 1, 4, 2, 1, 1, 0, 0].

//      Note: The length of temperatures will be in the range[1, 30000].Each temperature will be an integer in the range[30, 100].




var dailyTemperatures = function (T) {
     let temperature = T
     let hash = {}
     let stack = []
     stack.push(temperature[temperature.length - 1])
     hash[temperature[temperature.length - 1]] = temperature.length - 1
     let solutions = new Array(temperature.length).fill(0)


     for (let i = temperature.length - 2; i >= 0; i--) {
          if (temperature[i] < stack[stack.length - 1]) {
               solutions[i] = hash[stack[stack.length - 1]] - i
               stack.push(temperature[i])
               hash[temperature[i]] = i
          }
          if (temperature[i] >= stack[stack.length - 1]) {
               while (temperature[i] >= stack[stack.length - 1]) {
                    stack.pop()
               }
               if (stack.length === 0) {
                    stack.push(temperature[i])
                    hash[temperature[i]] = i
               } else {
                    solutions[i] = hash[stack[stack.length - 1]] - i
                    stack.push(temperature[i])
                    hash[temperature[i]] = i
               }
          }
          if (stack.length === 0) {
               stack.push(temperature[i])
               hash[temperature[i]] = i
          }
     }
     return solutions
};




// # Attempt 2

var dailyTemperatures = function (T) {
     let temperature = T
     let stack = []
     stack.push(temperature.length - 1)
     let results = new Array(temperature.length).fill(0)

     for (let i = temperature.length - 2; i >= 0; i--) {
          // we continue popping off items until we ARE GUARANTEED THAT THE TOP ITEM IN THE STACK IS GREATER (or the stack is empty)
          while (temperature[i] >= temperature[stack[stack.length - 1]]) {
               stack.pop()
          }
          if (stack.length === 0) {
               results[i] = 0
          } else {
               results[i] = stack[stack.length - 1] - i
          }
          stack.push(i)
     }
     return results
};