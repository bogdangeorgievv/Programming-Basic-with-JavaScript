function building(input) {
    let etaji = Number(input[0]);
    let stainaetaj = Number(input[1]);

    for(let i = etaji; i > 0; i--) {
        let printline = "";
        for(let j = 0; j < stainaetaj; j++) {
            if(i == etaji) {
                printline+= `L${i}${j} `;   
            }
             else if(i % 2 == 0) {
                printline+= `O${i}${j} `;  
            }
            else {
                printline+= `A${i}${j} `;
            }
        }
        
        console.log(printline)
    }
}
building(["6","4"])
