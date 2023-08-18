const phones = [
    {name: 'Samsung', camera: 12, storage: '32gb', price: 36000, color: 'silver'},
    {name: 'Walton', camera: 12, storage: '32gb', price: 22000, color: 'silver'},
    {name: 'iPhone', camera: 14, storage: '64gb', price: 65000, color: 'silver'},
    {name: 'Xaomi', camera: 14, storage: '32gb', price: 28000, color: 'silver'},
    {name: 'Oppo', camera: 12, storage: '32gb', price: 20000, color: 'silver'},
    {name: 'Nokia', camera: 12, storage: '32gb', price: 22000, color: 'silver'},
]

function cheapestPhone(phones) {
    let cheapeast = phones[0];
    for(let i = 0; i < phones.length; i++) {
        const phone = phones[i];
        if(phone.price < cheapeast.price) {
            cheapeast = phone;
        }
    }
    return cheapeast;
}

const mySelection = cheapestPhone(phones);

console.log(mySelection);