function calculate(input) {
    let yearlyfee = Number(input[0]);
    let shoes = yearlyfee*0.6;
    let clothes = shoes*0.8;
    let ball = clothes/4;
    let accessories = ball/5;
    let total = yearlyfee+shoes+clothes+ball+accessories;
    console.log(total);
}
