function sortMaket(arr) {
    const newArr = [];
    for (let i = 0; i < arr.length; i++) {
        const index = i;
        const element = arr[i];
        if (element < 0) {
            console.log("invalid input");
            break;
        } else {
            newArr.push(element);
        }
    }

    newArr.sort(function(a, b) {
        // Sort in descending order (big to small)
        return b - a;
    });

    return newArr;
}

const arr = [2, -3];
const output = sortMaket(arr);
console.log(output);
