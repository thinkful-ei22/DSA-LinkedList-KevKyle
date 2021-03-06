const LinkedList = require('./linked-list-class');
const {
  display,
  size,
  isEmpty,
  findPrevious,
  findLast
} = require('./linked-list-helpers');

const {
  reverseList,
  thirdFromEnd,
  middleOfList
} = require('./LL-interview');

function main(){
  const SLL = new LinkedList();
  SLL.insertFirst('Apollo');//0
  // console.log(SLL);
  SLL.insertLast('Boomer');//1
  // console.log(SLL);
  SLL.insertLast('Husker');//2
  SLL.insertLast('Helo');//3
  SLL.insertLast('Starbuck');
  SLL.insertLast('Tauhida');
  // console.log(SLL.find('Tauhida'));
  
  SLL.insertBefore('Athena', 'Boomer');
  // console.log(SLL);
  SLL.insertAfter('Hotdog', 'Helo');
  SLL.insertAt('Kat', 3);
  
  // console.log(SLL.find('Kat'));
  // SLL.remove('squirrel');
  // SLL.remove('Tauhida');
  // console.log(SLL.find('Tauhida'));
  
  // console.log(SLL);
  // HELPERS
  display(SLL);
  // console.log(size(SLL));
  // const emptySll = new LinkedList();
  // console.log(isEmpty(emptySll));
  // console.log(isEmpty(SLL));
  // console.log(findPrevious(SLL, 'Helo'));
  // console.log(findLast(SLL));

  // display(reverseList(SLL));
  // console.log(thirdFromEnd(SLL));
  console.log(middleOfList(SLL));
}
main();