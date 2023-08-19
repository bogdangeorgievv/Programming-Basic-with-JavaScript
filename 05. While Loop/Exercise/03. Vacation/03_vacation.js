function vacation(input) {

    let moneyNeededForExcursion = Number(input[0]);
    let availableMoney = Number(input[1]);
    let index = 2;
    let spendorsave;
    let amount = 0;
    let spendingDaysSequance = 0;
    

    while(availableMoney < moneyNeededForExcursion) {

        spendorsave = input[index];
        amount = Number(input[index+1]);

        if(spendorsave=="spend") {
            availableMoney = availableMoney - amount;
            spendingDaysSequance++;
        }
        if(spendorsave=="save") {
            availableMoney = availableMoney + amount;
            spendingDaysSequance = 0;
        }
        if(availableMoney<0) {
            availableMoney = 0;
        }
        index+=2;
        
        if(spendingDaysSequance>=5) {
            break;
        }
        
    }
    if(spendingDaysSequance>=5){
        console.log(`You can't save the money.`);
        console.log(`${(index-2)/2}`)
    } else {
        console.log(`You saved the money for ${(index-2)/2} days.`)
        
    }
        
    
}
vacation(["250",
"150",
"spend",
"50",
"spend",
"50",
"save",
"10",
"save",
"10"])

