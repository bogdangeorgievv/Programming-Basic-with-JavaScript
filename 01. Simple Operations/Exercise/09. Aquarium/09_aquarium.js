function calculate(input) {
    let length = Number(input[0]);
    let width = Number(input[1]);
    let height = Number(input[2]);
    let percent = Number(input[3]);
    let v = length*width*height;  //299625
    let v1 = v - (v*(percent/100));  // 299625 - 50936.25 = 248688.75
    let v1inLiters= v1/1000;
    console.log(v1inLiters);
}
