function calculate(input) {
    let depositSum = Number(input[0]);
    let depositTermInMonths = Number(input[1]);
    let annualInterestRate = Number(input[2]);
    let sum = depositSum + depositTermInMonths*((depositSum*(annualInterestRate/100))/12);
    console.log(sum);
}
calculate([`2350`,`6`, `7`])
