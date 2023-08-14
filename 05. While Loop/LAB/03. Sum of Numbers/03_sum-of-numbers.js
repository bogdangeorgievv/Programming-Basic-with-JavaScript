function sumOfNumbers(input) {

    let number = Number(input[0]);              
    let index = 1;
    let sum = 0;

    while(sum < number) {  
        sum+=Number(input[index]); 
        index++;
    }
    console.log(sum)
}
sumOfNumbers(["100", "10", "20", "30", "45"])
