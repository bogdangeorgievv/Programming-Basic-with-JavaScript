function coins(inputArray) { 
    let inputmoney = Math.trunc(Number(inputArray[0]) * 100);    
    let currentSum = 0;
    let coinsCount = 0;

    while (inputmoney !== currentSum) {    //123!== 0
        if(inputmoney - currentSum >= 200) {    
            currentSum+=200;
            coinsCount+=1;
        } else if(inputmoney - currentSum >= 100) {     
            currentSum+=100;   
            coinsCount+=1;
        } else if(inputmoney - currentSum >= 50) {
            currentSum+=50;
            coinsCount+=1;
        } else if(inputmoney - currentSum >= 20) {  
            currentSum+=20;
            coinsCount+=1;
        } else if(inputmoney - currentSum >= 10) {
            currentSum+=10;
            coinsCount+=1;
        } else if(inputmoney - currentSum >= 5) {
            currentSum+=5;
            coinsCount+=1;
        } else if(inputmoney - currentSum >= 2) {  
            currentSum+=2;
            coinsCount+=1;
        } else if(inputmoney - currentSum >= 1) {  
            currentSum+=1;
            coinsCount+=1;
        }
    }
    console.log(coinsCount)
} 
coins([2.40])
