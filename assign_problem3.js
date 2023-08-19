/*
function sortMaker(arr) {
    
    for (let i = 0; i < arr.length; i++) {
        const index = i;
        const element = arr[i];
        const newArr = [];
        if (element >= 0) {
            newArr.push(element);
        } else {
            console.log("invalid input");
            break;
        }
    }

}

const arr = [5, 5];
const output = sortMaker(arr);
console.log(output);

*/

function sortMaker(arr) {
    const [num1, num2] = arr;
  
    if (num1 < 0 || num2 < 0) {
      return "Invalid Input";
    } else if (num1 === num2) {
      return "equal";
    } else {
      return [Math.min(num1, num2), Math.max(num1, num2)];
    }
  }
  

console.log(sortMaker([7, 7]));
  