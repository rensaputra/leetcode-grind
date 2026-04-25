# Longest Consecutive Sequence

## Problem Statement

Given an unsorted array of integers `nums`, return the length of the longest consecutive elements sequence.

## Example

```Input: nums = [100,4,200,1,3,2]
Output: 4
Explanation: The longest consecutive elements sequence is [1, 2, 3, 4]. Therefore its length is 4.
```

## Complexity Breakdown

- Time: O(n), where n is the number of elements in the input array. We traverse the array once to build the set and then potentially traverse it again to find the longest sequence.
- Space: O(n), since we store all the elements in a set for O(1) lookups.
