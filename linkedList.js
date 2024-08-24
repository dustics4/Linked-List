import Node from "../Linked-List/node.js";

export default class LinkedList{
    constructor(){
        this.headNode = null;
    }

    toString(){
        //set current node to headnode
        let current = this.headNode;
        let str = ""; //empty string

        //while loop :- while at the head node
        while(current){
            str += `( ${current.value} ) ->  `; // add node.value onto the string
            current = current.nextNode; //switch on to the next node
        }
        return (str += "null"); //return or print the str + null, null being the end node
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
        //adds value to Node class
        let newNode = new Node(value, this.headNode);
        //adds node to the start of the list.
        this.headNode = newNode;
    }

//returns the total number of nodes in the list
    size(){
        let size = 0;
        let current = this.headNode;
    //while loop. Traverse until the end of the list
        while(current !== null){
            size++
            current = current.nextNode; //increaes size and move onto the next node
        }
        return size; 
    }

//returns the first node in the list
    head(){
        let current = this.headNode;

        while(current == null){ //traverse until the start of the list
            current = current.nextNode //head node is equal to the next node, which is the first one
        }
        return current.value; //return value of first node
    }

//returns the last node in the list
    tail(){
        let current = this.headNode;

        while(current.nextNode !== null){ //traverse until end node
            current = current.nextNode; // head node = next node, which is the last node
        }
        
        return current.value; //print value of last node
    }

//  returns the node at the given index
    at(index){
        let current = this.headNode;
        let count = 0;

        while(current !== null){ //traverse to end of list
            if(count == index){ //if count is the same as index, return the value
                return current.value;
            }
            count++; //increae count
            current = current.nextNode; //move headnode to the next node
           
        }
        return null; // else return null

    }

//remove the last node of the list
    pop(){
//if the first node is empty, return null
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
        if(value === current.value){ // boolean to compare value
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

        //if list is empty add the node to the start
        if(this.headNode === null & index === 0){
            let newNode = this.prepend(value);
            return newNode;
        }

        let newNode = new Node(value);
        let current = this.headNode;
        let startIndex = 0;

        while(current !== null & startIndex < index - 1){
            current = current.nextNode;
            startIndex++;
        }

        if(current === null){
            return null
        }

        newNode.nextNode = current.nextNode;
        current.nextNode = newNode;
        
// Step 1: If the index is 0, use the prepend method to insert the node at the beginning.
//Step 2: Traverse the list until you reach the node just before the desired index.
//Step 3: Insert the new node by adjusting the nextNode pointers.
//Step 4: Handle cases where the index is out of bounds (greater than the list's size).
    }

//that removes the node at the given index.
    removeAt(index){
//Step 1: If the index is 0, remove the head node by updating this.headNode.
//Step 2: Traverse the list to find the node just before the specified index.
//Step 3: Adjust the nextNode pointer to skip the node at the index.
//Step 4: Handle cases where the index is out of bounds.
    }
  
}