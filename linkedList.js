import Node from "../Linked-List/node.js";

export default class LinkedList{
    constructor(){
        this.headNode = null;
    }

    toString(){
        let current = this.headNode;
        let str = "";

        while(current){
            str += `( ${current.value} ) ->  `;
            current = current.nextNode;
        }
        return (str += "null");
    }

//append the node to the end of the list
    append(value) {
        //create new node
        let newNode = new Node(value);

        
        //if linked list is empty, make new node as head
        if(this.headNode === null){
            this.headNode = newNode;
            return;
        }

        //store head reference in a temp variable
        let last = this.headNode;

        //traverse until last node
        while(last.nextNode !== null){
            last = last.nextNode;
        }

        //change the pointer of the last node to the new node
        last.nextNode = newNode;        
    }

    prepend(value){
        let newNode = new Node(value, this.headNode);
        this.headNode = newNode;
    }

    size(){
        let size = 0;
        let current = this.headNode;

        while(current !== null){
            size++
            current = current.nextNode;
        }
        return size;
    }

    head(){
        let current = this.headNode;

        while(current == null){
            current = current.nextNode
        }
        return current.value;
    }

    tail(){
        let current = this.headNode;

        while(current !== null){
            current = current.nextNode;
        }
        return current;

    }

    at(index){

    }

    pop(){

    }

    contains(value){

    }

    find(value){

    }

    
}