
// TWO SUM Problem

// question: 

/*
Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.

You may assume that each input would have exactly one solution, and you may not use the same element twice.

You can return the answer in any order.

Example 1:

Input: nums = [2,7,11,15], target = 9
Output: [0,1]
Explanation: Because nums[0] + nums[1] == 9, we return [0, 1].
Example 2:

Input: nums = [3,2,4], target = 6
Output: [1,2]
Example 3:

Input: nums = [3,3], target = 6
Output: [0,1]
*/


// Answer

var twoSum = function(nums, target) {
     const map = new Map();

     for(let i = 0; i< nums.length; i++) {
        const total = target - nums[i];

        if(map.has(total)) {
            return [map.get(total), i]
        }
        map.set(nums[i], i)
     }
};



// 2nd question

//  Longest Substring Without Repeating Characters
/* 
Given a string s, find the length of the longest substring without duplicate characters.

Example 1:

Input: s = "abcabcbb"
Output: 3
Explanation: The answer is "abc", with the length of 3. Note that "bca" and "cab" are also correct answers.
Example 2:

Input: s = "bbbbb"
Output: 1
Explanation: The answer is "b", with the length of 1.
*/


// Answer 

var lengthOfLongestSubstring = function(s) {
    let set = new Set()
    let left = 0 
    let maxLength =  0

    for(let right =0; right< s.length; right++) {
        while(set.has(s[right])) {
            set.delete(s[left]);
            left++
        }
        set.add(s[right])
        maxLength = Math.max(maxLength, right - left + 1)
    }
    return maxLength
};


/* Question 3  Zigzag Conversion
The string "PAYPALISHIRING" is written in a zigzag pattern on a given number of rows like this: (you may want to display this pattern in a fixed font for better legibility)

P   A   H   N
A P L S I I G
Y   I   R
And then read line by line: "PAHNAPLSIIGYIR"

Write the code that will take a string and make this conversion given a number of rows:

string convert(string s, int numRows);
 

Example 1:

Input: s = "PAYPALISHIRING", numRows = 3
Output: "PAHNAPLSIIGYIR"
*/ 

// Answer 

var convert = function(s, numRows) {
    if(numRows === 1 || s.length <= numRows) return s;

    const rows = new Array(numRows).fill("")
    let currentRow = 0
    let goingDown = false

    for(let char of s) {
        rows[currentRow] += char;
        if(currentRow === 0 || currentRow === numRows -1) {
            goingDown = !goingDown
        }
        currentRow += goingDown ? 1  : -1
    }
    return rows.join("")
};