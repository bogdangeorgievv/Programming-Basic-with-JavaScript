function solve(input) {

    let index = 0;
    let sumPrime = 0;
    let sumNonPrime = 0;
    

    while(input[index] !== "stop") {

        let currentNumber = Number(input[index]);

        if(currentNumber<0) {
            console.log(`Number is negative.`);
        } else if(currentNumber === 0 || currentNumber === 1) {
            sumNonPrime += currentNumber;
        } else {
            let isnonPrime = false;
            for(let col=2; col < currentNumber; col++) {
                if(currentNumber % col === 0) {
                    isnonPrime=true;
                    break;
                }
            }
            if(isnonPrime) {
                sumNonPrime += currentNumber;

            } else {
                sumPrime +=currentNumber;
            }
        }
        index++;
    }
    console.log(`Sum of all prime numbers is: ${sumPrime}`);
    console.log(`Sum of all non prime numbers is: ${sumNonPrime}`);
}
solve(["3",
"9",
"0",
"7",
"19",
"4",
"stop"])
