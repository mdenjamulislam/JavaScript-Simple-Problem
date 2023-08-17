/*



*/

const names = ['Abul', 'Dabul', 'Emran', 'Abul', 'Babu', 'Hasan', 'Rakha', 'Dabul', 'Babu'];


function removeDuplicate(names) {
    const unique = [];
    for(let i = 0; i < names.length; i++) {
        const index = names[i];
        if(unique.includes(index) === false) {
            unique.push(index);
        }
    }
    return unique;
}

const uniqueNames = removeDuplicate(names);
console.log(uniqueNames);



















