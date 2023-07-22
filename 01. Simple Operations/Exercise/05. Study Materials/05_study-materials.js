function calculate(input) {
    let packagePen= 5.80;
    let packageMarkers=7.20;
    let preparat= 1.20;
    let numberPackagePen=Number(input[0]);
    let numberPackageMarkers=Number(input[1]);
    let numberLitersPreparat=Number(input[2]);
    let discountPercent=Number(input[3]);
    let sum=(packagePen*numberPackagePen)+(packageMarkers*numberPackageMarkers)+(preparat*numberLitersPreparat);
    let discountPrice = sum*discountPercent/100;
    let finalsum=sum-discountPrice;
    console.log(finalsum);
}
calculate([`2`,`3`,`4`, `25`])
