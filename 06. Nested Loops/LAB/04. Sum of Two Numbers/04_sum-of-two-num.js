function sumoftwonum(input) {
    let startingNumber = Number(input[0]);
    let finalNumber = Number(input[1]);
    let magicNumber = Number(input[2]);
    let combinations = 0;

    for(let i = startingNumber; i<=finalNumber; i++) {
        for(let j = startingNumber; j<=finalNumber; j++) {
            combinations++;
            if(i + j == magicNumber) {
                console.log(`Combination N:${combinations} (${i} + ${j} = ${magicNumber})`);
                return;
            }
        }
    }
    console.log(`${combinations} combinations - neither equals ${magicNumber}`)
}
sumoftwonum(["88", "888", "2000"])
