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

//adds a new node containing value to the start of the list
    prepend(value){
        let newNode = new Node(value, this.headNode);
        this.headNode = newNode;
    }

//returns the total number of nodes in the list
    size(){
        let size = 0;
        let current = this.headNode;

        while(current !== null){
            size++
            current = current.nextNode;
        }
        return size;
    }

//returns the first node in the list
    head(){
        let current = this.headNode;

        while(current == null){
            current = current.nextNode
        }
        return current.value;
    }

//returns the last node in the list
    tail(){
        let current = this.headNode;

        while(current.nextNode !== null){
            current = current.nextNode;
        }
        
        return current.value;
    }

//  returns the node at the given index
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

//remove the last node of the list
    pop(){
        if(this.headNode === null){
            return null;
        }
    //if list has only one node, return empty list
        if(this.headNode.nextNode === null){
            let lastNode = this.headNode;
            this.headNode = null;
            return lastNode;
        }

    // Traverse to the second-to-last node
        let current = this.headNode;
        while(current.nextNode.nextNode !== null){
            current = current.nextNode;
        }

    // current becomes second to last node
        const lastNode = current.nextNode; // this is the node to be removed
        current.nextNode = null; //remove the last node by setting the second to last node to null.

        return lastNode; //return the removed node
    }

    //check if the list contains the value provided
    contains(value){
        let current = this.headNode;
        if(value === current.value){
            return true
        }else{
            return false
        }
    }

//find the node value at provided index . returns the index of the node containing value, or null if not found.
    find(value){
        let current = this.headNode;
        let index = 0;

        while(current !== null){
            if(current.value == value){ //compare the nodes value with provided value
                return index; // then return the index
            }
            index++; // increment the counter
            current = current.nextNode;  // move onto the next
        }

        return null;
    }

//that inserts a new node with the provided value at the given index.
    insertAt(value, index){

    }

//that removes the node at the given index.
    removeAt(index){

    }
  
}