function solve(input) {

    let tournirs = Number(input[0]);
    let startingscore = Number(input[1]);

    let etapscore = 0;
    let winnings = 0;
    let totalscore = 0;

    for (let i=2; i <= tournirs+1; i++) {
        let etap = input[i];

        if(etap=="W") {
            etapscore+=2000;
            winnings++;
        }
        if(etap=="F") {
            etapscore+=1200;
        }
        if(etap=="SF") {
            etapscore+=720;
        }
    }

    totalscore = startingscore + etapscore;
    let procentw = ((winnings/tournirs)*100).toFixed(2);

    console.log(`Final points: ${totalscore}`);
    console.log(`Average points: ${Math.floor(etapscore/tournirs)}`);
    console.log(`${procentw}%`);
}
solve(["5",

"1400",

"F",

"SF",

"W",

"W",

"SF"])


