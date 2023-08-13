function solve(input) {

    let groups = Number(input[0]);
    let Musala = 0;
    let Montblanc = 0;
    let Kilimanjaro = 0;
    let K2 = 0;
    let Everest = 0;

    for(let i = 1; i<=groups; i++) {

        let alpinists = Number(input[i]);

        if(alpinists<=5){
            Musala=Musala+alpinists;
        }else if (alpinists>=6 && alpinists <= 12){
            Montblanc += alpinists;
        }
        else if (alpinists >= 13 && alpinists <= 25){
            Kilimanjaro += alpinists;
        }
        else if (alpinists >= 26 && alpinists <= 40){
            K2 += alpinists;
        }
        else if (alpinists >= 41){
            Everest += alpinists;
        }
    }
    let totalpeople = Musala + Montblanc + Kilimanjaro + K2 + Everest;

    let percentMusala = ((Musala/totalpeople)*100).toFixed(2);
    let percentMontblanc = ((Montblanc/totalpeople)*100).toFixed(2);
    let percentKilimanjaro = ((Kilimanjaro/totalpeople)*100).toFixed(2);
    let percentk2 = ((K2/totalpeople)*100).toFixed(2);
    let percentEverest = ((Everest/totalpeople)*100).toFixed(2);

    console.log(`${percentMusala}%`);
    console.log(`${percentMontblanc}%`);
    console.log(`${percentKilimanjaro}%`);
    console.log(`${percentk2}%`);
    console.log(`${percentEverest}%`);
}
solve(["5",

"25",

"41",

"31",

"250",

"6"])
