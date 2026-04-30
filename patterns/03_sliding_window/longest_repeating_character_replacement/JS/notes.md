# Longest Repeating Character Replacement

## Problem Statement

You are given a string `s` and an integer `k`. You can choose any character of the string and change it to any other uppercase English character. You can perform this operation at most `k` times.

Return the length of the longest substring containing the same letter you can get after performing the above operations.

## Example

```Input: s = "ABAB", k = 2
Output: 4
Explanation: Replace the two 'A's with two 'B's or vice versa.
```

## Complexity Analysis

- Time: O(n), where n is the length of the string. Each character is visited at most twice by the left and right pointers.
- Space: O(1) or O(26), since the character count array has a fixed size of 26 for uppercase English letters.
