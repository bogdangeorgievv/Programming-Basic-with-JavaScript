function pyramid(input) {
    let n = Number(input[0]);
    let current = 0;

    for(let row=0; row<=n; row++) {
        let printRow = ``;
        for(let col=0; col<=row; col++) {
            current++;
            printRow = printRow + `${current} `;

            if(current>=n) {
                break;
            }
        }
        console.log(printRow);
        if(current>=n) {
            break;
        }
    }
}
pyramid([15])
