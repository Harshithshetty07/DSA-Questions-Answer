
/* 
    Problem 14: Letter Combinations of a Phone Number
    Given a string containing digits from 2-9 inclusive, return all possible letter combinations that the number could represent. Return the answer in any order.

A mapping of digits to letters (just like on the telephone buttons) is given below. Note that 1 does not map to any letters.


 

Example 1:

Input: digits = "23"
Output: ["ad","ae","af","bd","be","bf","cd","ce","cf"]
Example 2:

Input: digits = "2"
Output: ["a","b","c"]
*/

// answer : 

var letterCombinations = function(digits) {
    if(digits.length === 0) return [];

    const map = {
        '2': 'abc',
        '3': 'def',
        '4': 'ghi',
        '5': 'jkl',
        '6': 'mno',
        '7': 'pqrs',
        '8': 'tuv',
        '9': 'wxyz'
    }

    const result = [];

    function backtrack(index, current) {
        if(index === digits.length) {
            result.push(current);
            return;
        }
        const letters = map[digits[index]];

        for(let letter of letters) {
            backtrack(index + 1, current + letter)
        }
    }
    backtrack(0, '');
    return result;

};


/* 

    Problem 15 : Remove Nth Node From End of List
Given the head of a linked list, remove the nth node from the end of the list and return its head.

Example 1:
Input: head = [1,2,3,4,5], n = 2
Output: [1,2,3,5]
Example 2:

Input: head = [1], n = 1
Output: []
Example 3:

Input: head = [1,2], n = 1
Output: [1]

*/

// answer: 

var removeNthFromEnd = function(head, n) {
   let dummy = new ListNode(0, head);
   let first = dummy;
   let second = dummy;

   for(let i = 0; i <= n; i++) {
    first = first.next;

   }
   while(first !== null) {
    first = first.next;
    second = second.next;
   }
   second.next = second.next.next;
   return dummy.next;

};