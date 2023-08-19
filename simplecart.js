const shoppingCart = [
    { name: 'shoe', price: 1200},
    { name: 'shirt', price: 2200},
    { name: 'pant', price: 3700},
    { name: 'belt', price: 600},
]

function totalCost(products) {
    let totalAmount = 0;
    for(let i = 0; i < products.length; i++) {
        const product = products[i];
        totalAmount = totalAmount + product.price;
    }

    return totalAmount;
}

const totalPrice = totalCost(shoppingCart);
console.log("Total price is",totalPrice);