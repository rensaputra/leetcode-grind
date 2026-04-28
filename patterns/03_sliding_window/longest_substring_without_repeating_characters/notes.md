# Longest Substring Without Repeaing Characters

## Problem Statement

Given a string `s`, find the length of the longest substring without repeating characters.

## Example

```
Input: s = "abcabcbb"
Output: 3
Explanation: The answer is "abc", with the length of 3.
```

## Complexity Analysis

- Time: O(n), even though there's a nested loop, `left` and `right` poiner only ever move forward.
- Space: O(min(n, m)), where `n` is the length of the string and m is the size of the character set.
