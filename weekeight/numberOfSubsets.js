// For a given list of integers and integer K, find the number of non-empty subsets S such that min(S) + max(S) <= K.

// Example 1:

// nums = [2, 4, 5, 7]
// k = 8
// Output: 5
// Explanation: [2], [4], [2, 4], [2, 4, 5], [2, 5]
// Example 2:

// nums = [1, 4, 3, 2]
// k = 8
// Output: 15
// Explanation: 16 (2^4) - 1 (empty set) = 15
// Example 3:

// nums = [2, 4, 2, 5, 7]
// k = 10
// Output: 27
// Explanation: 31 (2^5 - 1) - 4 ([7], [5, 7], [4, 5, 7], [4, 7]) = 27
// Expected O(n^2) time solution or better.

# https://leetcode.com/discuss/interview-question/268604/Google-interview-Number-of-subsets


// TODO - THIS IS IN PYTHON - REWRITE TO JS
// def get_subsets(nums, k):
//     nums.sort()
//     total = 0

//     for i, r in enumerate(nums):
//         for j in range(i+1):

//             if j > 0 and nums[j] == nums[j-1]:      # no repeating
//                 continue

//             l = nums[j]

//             if l + r <= k:

//                 if l == r:
//                     total += 1
//                 else:
//                     # head and tail must be picked (1)
//                     # everything between head and tail can be picked or not (2)
//                     # permutations = 1 * 2 * 2 * 2 ... * 1
//                     total += 1 * 1 * 2**(r-l-1)

//     return total


// print(get_subsets([2, 4, 5, 7], 8))
// print(get_subsets([1, 4, 3, 2], 8))
// print(get_subsets([2, 4, 2, 5, 7], 10))