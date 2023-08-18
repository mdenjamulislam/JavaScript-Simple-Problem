/*

Note: I need three furniture for my parmanent guest. 
1. chair --- 3cft
2. table --- 10 cft
3. bed --- 50 cft;

How can I calculate of the futniture wood?
Step: fixed: per item wood requirements.
Step: varry: furniture quantity

*/

function woodCalculator(chairQuantity, tableQuantity, bedQuantity) { 
    const perChairWood = 3;
    const perTableWood = 10;
    const perBedWood = 50;

    const chairWood = chairQuantity * perChairWood;
    const tableWood = tableQuantity * perTableWood;
    const bedWood = bedQuantity * perBedWood;

    const totalWood = chairWood + tableWood + bedWood;

    return totalWood;
}

const totalWood = woodCalculator(5, 3, 4);

console.log(totalWood);



