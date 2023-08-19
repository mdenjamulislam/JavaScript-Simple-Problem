/*

1. If tickrt numbers is less than 100, per ticket price 100;
2. If ticket number is more than 100, but less than 200, First 100 tickets will be 100/perticket.
RWST ticket will be 90 taks per piece. 
3. if you purchase more than 200 tickets 
    first 100 ----> 100tk
        101 - 200 ----> 90tk
        200+ ----> 70tk

*/

function ticketPrice(ticketQuentity) {
    const first100Rate = 100;
    const second100Rate= 90;
    const restTiccketRate = 70;

    if(ticketQuentity <= 100) {
        const price = ticketQuentity * first100Rate;
        return price;
    }else if(ticketQuentity <= 200) {
        const first100Price = 100 * first100Rate;
        const restTicketQuestity = ticketQuentity - 100;
        const restTicketPrice = restTicketQuestity * second100Rate;
        const totalPrice = first100Price + restTicketPrice;
        return totalPrice;
    }else {
        const first100Price = 100 * first100Rate;
        const second100Price = 100 * second100Rate;
        const restTicketQuentity = ticketQuentity - 200;
        const restTicketPrice = restTicketQuentity * restTiccketRate;
        const totalPrice = first100Price + second100Price + restTicketPrice;
        return totalPrice;
    }
    
}

const price = ticketPrice(109);
console.log(price);
