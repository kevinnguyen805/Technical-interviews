// Input:

// Given an array A of
// -positive
// -sorted
// -no duplicate
// -integer

// A positive integer k


// Output:

// Count of all such subsets of A,
// Such that for any such subset S,
// Min(S) + Max(S) = k
// subset should contain atleast two elements

// 1. Backtracking approach to get subsets
// 2. Get min and max of subset
// 3. Add min and max and put them in Hashmap (or update the count)
// 4. repeat this process for all subsets
// 5. search for k in hashmap and return count of k

// input: {1,2,3,4,5}

// subsets: 
// 1, 2, 3, 4, 5, {1,2},{1,3}
// k = 5

// count = 5

// {1, 4},{2,3} {1,2,4}, {1,2,3,4} {1,3,4}

// */
// def countSubsets(nums,k):
//     nums.sort()
//     count = 0
//     for i in range(len(nums)):
//         for j in range(i,len(nums)):
//             if nums[i]+nums[j]>k:
//                 break
//             if nums[i]+nums[j]==k:
//                 count += 2**((j-i-1) if j-i>1 else 0)
//     print(count)
//     return count

// countSubsets([1,2,3,4,5], 5)

// def find_subsets_of_sum_k(self, numbers: List[int], k:int) -> List[int]:
//         # First we need to find the pairs that gives us sum = k.
//         # After that we'll need to find all the sublists between this min and max

//         seen = set(numbers)
//         pairs:Set[Tuple[int, int]] = set()
//         res: List[int] = []
//         for number in numbers:
//             target = k - number
//             if target in seen:
//                 pairs.add((number, target))
//                 # Removing both number and target so we won't have the add them again to the pair list
//                 seen.remove(number)
//                 seen.remove(target)

//         for pair in list(pairs):
//             res.extend(self._get_sublists(numbers, pair))

//         return len(res)

//     def _get_sublists(sekf, numbers: List[int], pair: Tuple[int]) -> List[List[int]]:
//         left_value, right_value = pair[0], pair[-1]
//         left_value_index, right_value_index = numbers.index(left_value), numbers.index(right_value)
//         window_length = right_value_index - left_value_index - 1
//         if window_length == 0:
//             return [left_value, right_value]

//         subsets = []
//         sub_list_without_left_and_right = numbers[left_value_index + 1: right_value_index]
//         for window_size in range(window_length):
//             for subset in combinations(sub_list_without_left_and_right, window_size):
//                 subsets.append([left_value] + list(subset) + [right_value])
//         return subsets