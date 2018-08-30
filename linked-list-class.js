class _Node {
  constructor(val, next){
    this.value = val;
    this.next = next;
  }
}

class LinkedList {
  constructor(){
    this.head = null;
  }
  insertFirst(item){
    this.head = new _Node(item, this.head);
    //if adding a new linked list item for the
    //first time, this.head is null; otherwise
    //this.head is the old head node
  }
  insertLast(item){
    if(this.head === null){
      this.insertFirst(item);
    }
    else{
      let tempNode = this.head;
      while(tempNode.next !== null){
        tempNode = tempNode.next;
      }
      tempNode.next = new _Node(item, null);
    }
  }
  find(item){
    let currNode = this.head;
    if(!this.head){
      return null;
    }
    while(currNode.value !== item){
      if(currNode.next === null){
        return null;
      }
      else{
        currNode = currNode.next;
      }
    }
    return currNode;
  }
  remove(item){
    if(!this.head){
      return null;
    }
    if(this.head.value === item){
      this.head = this.head.next;
      return;
    }
    let currNode = this.head;
    let prevNode = this.head;
    while ((currNode !== null) && (currNode.value !== item)){
      prevNode = currNode;
      currNode = currNode.next;
    }
    if(currNode === null){
      console.log('Item not found');
      return;
    }
    prevNode.next = currNode.next;
  }
  insertBefore(newItem, nodeFind){
    if(!this.head){
      return null;
    }
    if(this.head === nodeFind){
      this.insertFirst(newItem);
      return;
    }
    let currNode = this.head;
    while((currNode.next !== null) && (currNode.next.value !== nodeFind)){
      currNode = currNode.next;
    }
    if(currNode.next === null){
      console.log('Item not found');
      return;
    }
    let newNode = new _Node(newItem, currNode.next);
    //point the new node to the current node's next
    currNode.next = newNode;
    //point the current node to the new node
  }
  insertAfter(newItem, nodeFind){
    if(!this.head){
      return null;
    }
    let currNode = this.head;
    while((currNode !== null) && (currNode.value !== nodeFind)){
      currNode = currNode.next;
    }
    if(currNode === null){
      console.log('Item not Found');
      return;
    }
    currNode.next = new _Node(newItem, currNode.next);
  }
  insertAt(newItem, position){
    if(!this.head){
      return null;
    }
    if(position === 0){
      this.insertFirst(newItem);
      return;
    }
    let indexLL = 0;
    let currNode = this.head;
    while((currNode.next !== null) && (indexLL < (position-1))){
      currNode = currNode.next;
      indexLL++;
    }
    // if(indexLL === position){

    // }
  }
}

module.exports = LinkedList;