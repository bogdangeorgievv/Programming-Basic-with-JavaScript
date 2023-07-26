function calculate(input) {
  let priceOfSqm = 7.61;
  let sqm = Number(input[0]);
  let price = priceOfSqm * sqm;
  let discount = price * 0.18;
  let finalPrice = price - discount;
  
  console.log(`The final price is ${finalPrice} lv.`);
  console.log(`The discount is: ${discount} lv.`);
}
calculate(["150"]);
