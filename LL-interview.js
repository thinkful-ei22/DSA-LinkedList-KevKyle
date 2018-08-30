const LinkedList = require('./linked-list-class');
const linkedList = new LinkedList();
const {findLast} = require('./linked-list-helpers');

//1,2,3,2
function WhatDoesThisProgramDo(lst){
  let current = lst.head;
  while(current !== null){
    let newNode = current;
    while (newNode.next !== null) {
      if (newNode.next.value === current.value) {
        newNode.next = newNode.next.next;
      }
      else{
        newNode = newNode.next;
      }
    }
    current = current.next;
  }
}
/*this function, WhatDoesThisProgramDo(lst), looks for duplicates in a
linked list and then sets that next pointer to skip over the duplicate node by
calling newNode.next = newNode.next.next.
*/
/*Run time complexity - O(n^2) nest while loops. the first (head) is being matched
with every nth value after that until the end of the linked list.
Then the current position moves up one to compare the next value and all the 
values after that to the end of the linked list and so on.
*/

// A       B        C      D     E    F 
// 0       1        2      3     4    5

// points 
//Reverse a List
function reverseList (list){
  let currNode = list.head;
  //starting here
  let prevNode = null;
  //the previous node - set initially to null
  
  while(currNode){
    let tempNode = currNode.next;

    currNode.next = prevNode;
    prevNode = currNode;
    currNode = tempNode;
  }
  list.head = prevNode;
  return list;
}

function thirdFromEnd(list){
  if(!list.head || !list.head.next.next){
    return null;
  }

  let currNode = list.head;
  while(currNode.next.next.next){
    currNode = currNode.next;
  }
  return currNode;
}
//run-time complexity - O(n). one while loop. scales with n numbers

function middleOfList(list){
  if(!list.head){
    return null;
  }
  let currNode = list.head;
  while((currNode.next !== null) && (currNode.next.next !== null)){
    
    list.head = list.head.next;
    list.remove(findLast(list).value);
    // console.log(list.head, '123123213');
    currNode = list.head;
  }
  return currNode;
}
//run-time complexity - O(n^2). it is using nested while loops.

module.exports = {
  reverseList,
  thirdFromEnd,
  middleOfList
};


