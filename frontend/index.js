
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


/* 
    Question 6 Palindrome Number
Given an integer x, return true if x is a palindrome, and false otherwise.

 

Example 1:

Input: x = 121
Output: true
Explanation: 121 reads as 121 from left to right and from right to left.
Example 2:

Input: x = -121
Output: false
Explanation: From left to right, it reads -121. From right to left, it becomes 121-. Therefore it is not a palindrome.

*/

// Answer

var isPalindrome = function(x) {
    if( x < 0) return false;

    const str = x.toString();

    const reversed = str.split('').reverse().join('');

    return str === reversed
};


/* 
    Question 7 Regular Expression Matching

    Given an input string s and a pattern p, implement regular expression matching with support for '.' and '*' where:

'.' Matches any single character.​​​​
'*' Matches zero or more of the preceding element.
The matching should cover the entire input string (not partial).

 

Example 1:

Input: s = "aa", p = "a"
Output: false
Explanation: "a" does not match the entire string "aa".
Example 2:

Input: s = "aa", p = "a*"
Output: true
Explanation: '*' means zero or more of the preceding element, 'a'. Therefore, by repeating 'a' once, it becomes "aa".
*/

// Answer

var isMatch = function(s, p) {
   const m = s.length;
   const n = p.length;

   const dp = Array.from({ length: m + 1}, () => Array(n +1).fill(false));

   dp[0][0] = true;

   for(let j =1; j<=n; j++) {
    if(p[j - 1] === '*') {
        dp[0][j] = dp[0][j-2]
    }
   } 

for(let i = 1; i<= m; i++) {
    for(let j = 1; j <= n; j++) {
        if( p[ j - 1] === '.' || p[j - 1] === s[i -1 ]) {
            dp[i][j] = dp[i - 1][j- 1];
        } else if( p[j-1] === '*' ) {
            dp[i][j] = dp[i][j- 2];

            if(p[j - 2] === '.' || p[ j- 2] === s[j - 1]) {
                dp[i][j] = dp[i][j] || dp[i -1 ][j]
            }
        }
    }
}
return dp[m][n]
};

// simple answer 

var isMatch = function(s, p) {
    // Base case: if pattern is empty, string must also be empty
    if (p.length === 0) {
        return s.length === 0;
    }

    // Check if first character matches (or if pattern starts with '.')
    const firstMatch = s.length > 0 && (p[0] === s[0] || p[0] === '.');

    // If next character in pattern is '*'
    if (p.length >= 2 && p[1] === '*') {
        // Two possibilities:
        // 1️⃣ '*' means zero occurrence of previous char → skip two chars in pattern
        // 2️⃣ '*' means one or more occurrences → move one char in string if firstMatch
        return (
            isMatch(s, p.slice(2)) || 
            (firstMatch && isMatch(s.slice(1), p))
        );
    } else {
        // If no '*', move one char forward in both string and pattern
        return firstMatch && isMatch(s.slice(1), p.slice(1));
    }
};


/* Question 8  Container With Most Water 

You are given an integer array height of length n. There are n vertical lines drawn such that the two endpoints of the ith line are (i, 0) and (i, height[i]).

Find two lines that together with the x-axis form a container, such that the container contains the most water.

Return the maximum amount of water a container can store.

Notice that you may not slant the container.

Input: height = [1,8,6,2,5,4,8,3,7]
Output: 49
Explanation: The above vertical lines are represented by array [1,8,6,2,5,4,8,3,7]. In this case, the max area of water (blue section) the container can contain is 49.

*/

// Answer

var maxArea = function(height) {
    let left = 0;
    let right = height.length - 1;
    let maxWater = 0;

    while(left < right) {
        const width = right - left;
        const minHeight = Math.min(height[left], height[right]);
        const area = width * minHeight;

        maxWater = Math.max(maxWater, area);

        if(height[left] < height[right]) {
            left++;
        } else {
            right--;
        }
    }
    return maxWater;
};


/* 9 Roman to Integer */

/* 
Roman numerals are represented by seven different symbols: I, V, X, L, C, D and M.

Symbol       Value
I             1
V             5
X             10
L             50
C             100
D             500
M             1000
For example, 2 is written as II in Roman numeral, just two ones added together. 12 is written as XII, which is simply X + II. The number 27 is written as XXVII, which is XX + V + II.

Roman numerals are usually written largest to smallest from left to right. However, the numeral for four is not IIII. Instead, the number four is written as IV. Because the one is before the five we subtract it making four. The same principle applies to the number nine, which is written as IX. There are six instances where subtraction is used:

I can be placed before V (5) and X (10) to make 4 and 9. 
X can be placed before L (50) and C (100) to make 40 and 90. 
C can be placed before D (500) and M (1000) to make 400 and 900.
Given a roman numeral, convert it to an integer.

 

Example 1:

Input: s = "III"
Output: 3
Explanation: III = 3.
Example 2:

Input: s = "LVIII"
Output: 58
Explanation: L = 50, V= 5, III = 3.
Example 3:

Input: s = "MCMXCIV"
Output: 1994
Explanation: M = 1000, CM = 900, XC = 90 and IV = 4.

*/

//Answer 

var romanToInt = function(s) {

const result = {
    'I': 1,
    "V": 5,
    'X': 10,
    'L': 50,
    'C': 100,
    'D': 500,
    'M': 1000
}

let total = 0;

for( let i =0; i<s.length; i++) {
    const current = result[s[i]];
    const next = result[s[i + 1]]

    if(current < next) { 
        total -= current;
    }
    else {
        total += current
    }
}

return total
};


/* Problem 10 : Longest Common Prefi 
Write a function to find the longest common prefix string amongst an array of strings.

If there is no common prefix, return an empty string "".

 

Example 1:

Input: strs = ["flower","flow","flight"]
Output: "fl"
Example 2:

Input: strs = ["dog","racecar","car"]
Output: ""
Explanation: There is no common prefix among the input strings.

*/

// Answer 

var longestCommonPrefix = function(strs) {
    if(!strs.length) return "";

    let longChar = strs[0];

    for(let i = 1; i < strs.length; i++) {
        while(strs[i].indexOf(longChar) !==0) {         // indexOf: Method in JavaScript is used to find the first occurrence of a specified value within a string or array.
            longChar = longChar.slice(0, longChar.length - 1); // Slice: is used to extract a portion of an array or string and return it as a new array or string respectively
            if(!longChar) return "";
        }
    }
    return longChar
};


/* problem: 11 => 3Sum

Given an integer array nums, return all the triplets [nums[i], nums[j], nums[k]] such that i != j, i != k, and j != k, and nums[i] + nums[j] + nums[k] == 0.

Notice that the solution set must not contain duplicate triplets.

 

Example 1:

Input: nums = [-1,0,1,2,-1,-4]
Output: [[-1,-1,2],[-1,0,1]]
Explanation: 
nums[0] + nums[1] + nums[2] = (-1) + 0 + 1 = 0.
nums[1] + nums[2] + nums[4] = 0 + 1 + (-1) = 0.
nums[0] + nums[3] + nums[4] = (-1) + 2 + (-1) = 0.
The distinct triplets are [-1,0,1] and [-1,-1,2].
Notice that the order of the output and the order of the triplets does not matter.
Example 2:

Input: nums = [0,1,1]
Output: []
Explanation: The only possible triplet does not sum up to 0.
Example 3:

Input: nums = [0,0,0]
Output: [[0,0,0]]
Explanation: The only possible triplet sums up to 0.

*/

// Answer 

var threeSum = function(nums) {
    nums.sort((a, b) => a - b);
    let result = [];

    for(let i = 0; i <nums.length - 2; i++) {
        if(i > 0 && nums[i] === nums[i - 1]) continue;

    let left = i + 1;
    let right = nums.length - 1;

    while( left < right) {
        const sum = nums[i] + nums[left] + nums[right];

        if(sum === 0) {
            result.push([nums[i], nums[left], nums[right]])
            left++;
            right--

            while(left < right && nums[left] === nums[left - 1]) left++;
            while(left < right && nums[right] === nums[right + 1]) right--
        }
        else if( sum < 0) {
            left++
        }
        else {
            right--
        }
    }


    }
    return result
};