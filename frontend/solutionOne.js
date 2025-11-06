
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

/* Problem : 16 
    Valid Parentheses
Given a string s containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.

An input string is valid if:

Open brackets must be closed by the same type of brackets.
Open brackets must be closed in the correct order.
Every close bracket has a corresponding open bracket of the same type.
 

Example 1:

Input: s = "()"

Output: true

Example 2:

Input: s = "()[]{}"

Output: true

Example 3:

Input: s = "(]"

Output: false
Example 4:

Input: s = "([])"

Output: true

Example 5:

Input: s = "([)]"

Output: false
*/

//   Answer 

var isValid = function(s) {
    const stack = [];
    const data = {
        '(' : ')',
        '{' : '}',
        '[' : ']'
    }

    for(let char of s) {
        if(data[char]) {
            stack.push(data[char])
        } else {
            if(stack.pop() !== char) {
                return false
            }
        }
    }
}

/* Problem 16 : Merge Two Sorted Lists

You are given the heads of two sorted linked lists list1 and list2.

Merge the two lists into one sorted list. The list should be made by splicing together the nodes of the first two lists.

Return the head of the merged linked list.
Input: list1 = [1,2,4], list2 = [1,3,4]
Output: [1,1,2,3,4,4]
Example 2:

Input: list1 = [], list2 = []
Output: []
Example 3:

Input: list1 = [], list2 = [0]
Output: [0]

*/

// answer : 

var mergeTwoLists = function(list1, list2) {
     
    let dummy = new ListNode(-1);
    let current = dummy;

    while(list1 !== null && list2 !== null) {
        if(list1.val <= list2.val) {
            current.next = list1;
            list1 = list1.next;
        } else {
            current.next = list2;
            list2 = list2.next;
        }
        current = current.next;
    }
    current.next = list1 !== null ? list1 : list2;
    return dummy.next;


};