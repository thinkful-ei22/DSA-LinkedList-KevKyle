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

const findPrevious = (list, item) => {
  if (!list.head || list.head === item) {
    return null;
  }
  let currNode = list.head;
  while (currNode && currNode.next.value !== item) {
    currNode = currNode.next;
  }
  if (!currNode) {
    console.log('Item not found');
    return;
  }

  return currNode;
};

const findLast = (list) => {
  if (!list.head) {
    return null;
  }
  let currNode = list.head;
  while (currNode.next) {
    currNode = currNode.next;
  }
  return currNode;
};

module.exports = {
  display,
  size,
  isEmpty,
  findPrevious,
  findLast
};