import Node from "../Linked-List/node.js";

export default class LinkedList{
    constructor(){
        this.headNode = null;
    }

    toString(){
        console.log("run!");
        let current = this.headNode;
        let str = "";

        while(current){
            str += current.value + "";
            current = current.nextNode;
        }
        return str;
    }

//append the node to the end of the list
    append(value) {
        console.log("run!");

        //create new node
        let newNode = new Node(value);

        //if linked list is empty, make new node as head
        if(this.headNode === null){
            return newNode;
        }

        //store head reference in a temp variable
        let last = this.headNode;

        //traverse until last node
        while(last.nextNode !== null){
            last = last.newNode;
        }

        //change the pointer of the last node to the new node
        last.newNode = newNode;

        //return the head of the list
        return this.headNode;
    }

    prepend(value){
        let newNode = new Node(value, this.headNode);
        this.headNode = newNode;
    }

    size(){

    }

    head(){

    }

    tail(){

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