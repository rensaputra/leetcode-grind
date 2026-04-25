# Group Anagrams

## Problem Statement

Given an array of strings `strs`, group the anagrams together. You can return the answer in any order.

## Example

```Input: strs = ["eat","tea","tan","ate","nat","bat"]
Output: [["bat"],["nat","tan"],["ate","eat","tea"]]
```

Explanation:

- There is no string in strs that can be rearranged to form "bat".
- The strings "nat" and "tan" are anagrams as they can be rearranged to form each other.
- The strings "ate", "eat", and "tea" are anagrams as they can be rearranged to form each other.

## Complexity Breakdown

- Time: O(n \* k log k), where n is the number of strings and k is the length of the longest string. Sorting each string takes k log k.
- Space: O(n \* k), since we are storing each character of every string in the Map.
