function calculate(input) {
    let chickenmenu = 10.35;
    let fishmenu = 12.40;
    let veggymenu = 8.15;
    let numcmenu = Number(input[0]);
    let numfmenu = Number(input[1]);
    let numvmenu = Number(input[2]);
    let order = (chickenmenu*numcmenu)+(fishmenu*numfmenu)+(veggymenu*numvmenu);
    let dessert = order*0.2;
    let total = order + dessert + 2.50;
    console.log(total);
}
