/*eslint-disable */
"use strict";
class Node{
    constructor(value){
        this.value = value;
        this.next = null;
    }
}
// let first =new Node("firstName");
// first.next  =  new Node("third") 
// console.log(first);
class singleLinkdList{
    constructor(){
        this.head =  null;
        this.tail =  null;
        this.length = 0;
    }
    push(val){
        let newNode = new Node(val);
        if(!this.head){
            this.head = newNode;
            this.tail = this.head;
            
        }else{
            this.tail.next = newNode;
            this.tail = newNode;
        }
        this.length++;
        return this;
    }
    pop(){
        if(!this.head) return undefined;
        let current = this.head;
        let newTail = current;
        while(current.next){
            newTail = current;
            current = current.next;
        }
        this.tail = newTail;
        this.tail.next = null;
        this.length--;
        if(this.length ===0){
            this.head =  null;
            this.tail = null;
        }
        return current;
    }
}
let list = new singleLinkdList();
list.push("hello");
list.push("goodBye");
list.push("Aman");
list.push("Hamid");
list.push("sol");
// console.log(list.length)
// console.log(list)
list.pop()
list.pop()
list.pop()
console.log(list.pop())
console.log(list)