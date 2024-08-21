import LinkedList from "./linkedList.js";

const list = new LinkedList;

list.append("dog");
list.append("cat");
list.append("parrot");
list.append("hamster");
list.append("snake");
list.append("turtle");

console.log(list.toString()); // ( dog ) ->  ( cat ) ->  ( parrot ) ->  ( hamster ) ->  ( snake ) ->  ( turtle ) ->  null
console.log(list.size()); // 6
console.log(list.head()) //dog
console.log(list.tail()); // turtle