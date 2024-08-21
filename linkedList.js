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

        while(current.nextNode !== null){
            current = current.nextNode;
        }
        
        return current.value;
    }

    at(index){
        let current = this.headNode;
        let count = 0;

        while(current !== null){
            if(count == index){
                return current.value;
            }
            count++;
            current = current.nextNode;
           
        }
        return null;

    }

    pop(){

    }

    contains(value){
        let current = this.headNode;
        if(value === current.value){
            return true
        }else{
            return false
        }
    }

    find(value){
        let current = this.headNode;
        let count = 0;

        while(current !== null){
            if(count == value){
                return current;
            }
            count++;
            current = current.nextNode; 
        }
        return null;
    }
  
}