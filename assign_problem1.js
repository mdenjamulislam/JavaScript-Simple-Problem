
function cubeNumber(number) {
    if(typeof(number) != 'number') {
        return "Inout must be a number.";
    }else {
        const result = number*number*number; 
        return result;
    }
}

const output = cubeNumber(8);
console.log(output);


