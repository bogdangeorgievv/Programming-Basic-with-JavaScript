function maxNum(input) {
    let inputElement = input[0];
    let index = 1;
    let max = Number.MIN_SAFE_INTEGER;
    while(inputElement !== "Stop") {
        let num = Number(inputElement);
        if(max<num) {
            max=num;
        }
        inputElement = input[index];
        index++;
    }
    console.log(max)
}
maxNum(["45", "-20", "7", "99", "Stop"])
