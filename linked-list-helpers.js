'use strict';


/*
list: {
  node0: { val: 'Apollo', next: 'Boomer' },
  node1: { val: 'Boomer', next: null }
}
*/

const display = (list) => {
  const listDisplay = {};
  let currNode = list.head;
  let position = 0;
  while (currNode) {
    // add node to list obj
    listDisplay[`node${position}`] = { value: currNode.value, next: currNode.next ? currNode.next.value : null };
    // move to the next node
    currNode = currNode.next;
    position++;
  }
  console.log(listDisplay);
  return listDisplay;
};

const size = (list) => {
  let listSize = 0;
  if (!list.head) {
    return listSize;
  }
  let currNode = list.head;
  while(currNode) {
    listSize++;
    currNode = currNode.next;
  }
  return listSize;
};

const isEmpty = (list) => {
  return !list.head;
};

const findPrevious = () => {};

const findLast = () => {};

module.exports = {
  display,
  size,
  isEmpty,
  findPrevious,
  findLast
};