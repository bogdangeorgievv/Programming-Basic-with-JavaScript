function solve(input) {
    let inputElement = input[0];
    let index = 1;
    let min = Number.MAX_SAFE_INTEGER;
    while(inputElement !== "Stop") {
        let currentNumber = Number(inputElement);
        if(inputElement < min) {
            min = currentNumber;
        }
        inputElement = input[index];
        index++;
    }
    console.log(min)
}
solve(["100",

"99",

"0",

"70",

"Stop"])
