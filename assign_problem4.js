function findAddress(obj) {
    let street, house, society;

    if (obj.hasOwnProperty('street')) {
        street = obj.street;
    } else {
        street = '__';
    }

    if (obj.hasOwnProperty('house')) {
        house = obj.house;
    } else {
        house = '__';
    }

    if (obj.hasOwnProperty('society')) {
        society = obj.society;
    } else {
        society = '__';
    }

    return `${street}, ${house}, ${society}`;
}

const obj = {street: 10, house: "15A", society: "Earth Perfect"};
const output = findAddress(obj);
console.log(output);

