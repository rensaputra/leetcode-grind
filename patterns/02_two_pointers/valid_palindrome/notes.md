# Valid Palindrome

## Problem Statement

A phrase is a **palindrome** if, after converting all uppercase letters into lowercase letters and removing all non-alphanumeric characters, it reads the same forward and backward. Alphanumeric characters include letters and numbers.

Given a string `s`, return `true` if it is a palindrome, or `false` otherwise.

Example

```Input: s = "A man, a plan, a canal: Panama"
Output: true
Explanation: "amanaplanacanalpanama" is a palindrome.
```

## Complexity Breakdown

- Time: O(n), where n is the length of the input string. We traverse the string once to check for palindrome properties.
- Space: O(1), we only use two pointers to store indices, whether the input is 10 chars or 10 million, memory footprint stays the same.
