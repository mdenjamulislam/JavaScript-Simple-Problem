/*

How to use typeof;
Note: Typeof - typeof is a built-in operator in JavaScript that allows you to determine the data type of a given value or expression. It returns a string indicating the type of the operand.

How can I find array type?
Ans: Array.isArray(arrayName);


*/
const country = "Bangladesh";
const age = 52;
const isIndependent = true;
const student = {id: 221, class: 11, name: 'Ayesha'};
const friends = [13, 34, 23, 232, 45, 45, 56];
function add(num1, num2) {
    return num1 + num2;
}

console.log(typeof(country));
console.log(typeof age);
console.log(typeof isIndependent);
console.log(typeof student);
// Array chacking
console.log(Array.isArray(friends));
console.log(typeof add);

// Concat
const otherFriends = [34, 23, 23, 56, 23, 89, 63, 45, 90];
const allFriends = otherFriends.concat(friends);
console.log(allFriends);