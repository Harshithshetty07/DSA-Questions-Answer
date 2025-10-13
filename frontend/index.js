
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


/* 
    Question 4 Reverse Integer
    Given a signed 32-bit integer x, return x with its digits reversed. 
    If reversing x causes the value to go outside the signed 32-bit integer range [-231, 231 - 1], then return 0.
    
    Example 1:

Input: x = 123
Output: 321
*/

// Answer 

var reverse = function(x) {
    const sign = Math.sign(x)
    let reversed = parseInt(Math.abs(x).toString().split('').reverse().join('')) * sign;
    if(reversed < -(2 ** 31) || reversed > (2 ** 31)) {
        return 0
    }
    return reversed
};

console.log(reverse(123))


/* Question 5 String to Integer 

Implement the myAtoi(string s) function, which converts a string to a 32-bit signed integer.

The algorithm for myAtoi(string s) is as follows:

Whitespace: Ignore any leading whitespace (" ").
Signedness: Determine the sign by checking if the next character is '-' or '+', assuming positivity if neither present.
Conversion: Read the integer by skipping leading zeros until a non-digit character is encountered or the end of the string is reached. If no digits were read, then the result is 0.
Rounding: If the integer is out of the 32-bit signed integer range [-231, 231 - 1], then round the integer to remain in the range. Specifically, integers less than -231 should be rounded to -231, and integers greater than 231 - 1 should be rounded to 231 - 1.
Return the integer as the final result.

Example 1:

Input: s = "42"

Output: 42

Explanation:

The underlined characters are what is read in and the caret is the current reader position.
Step 1: "42" (no characters read because there is no leading whitespace)
         ^
Step 2: "42" (no characters read because there is neither a '-' nor '+')
         ^
Step 3: "42" ("42" is read in)

*/

// Answer 

var myAtoi = function(s) {
        let i = 0;
    const n = s.length;
    let sign = 1;
    let result = 0;

    while(i < n && s[i] === ' ') i++;

    if(i< n && (s[i] === '+' || s[i] === '-' )){
        sign = s[i] === '-' ? -1 : 1;
        i++
    }

    while(i < n  && s[i] >= '0' && s[i] <= '9') {
        result = result * 10 + (s[i] - '0');
        i++
    }

     result *= sign;

    const INT_MIN = -2147483648;
    const INT_MAX = 2147483647;

    if(result < INT_MIN) return INT_MIN;
    if(result > INT_MAX) return INT_MAX;

    return result;
};
