function calculate(input) {
  let month = input[0];
  let nights = Number(input[1]);
  let priceStudio = 0;
  let priceApartment = 0;

  if (month == "May" || month == "October") {
    priceStudio = nights * 50;
    priceApartment = nights * 65;
    if (nights > 7 && nights <= 14) {
      priceStudio -= priceStudio * 0.05;
    }
    if (nights > 14) {
      priceStudio -= priceStudio * 0.3;
      priceApartment -= priceApartment * 0.1;
    }
  }
  if (month == "June" || month == "September") {
    priceStudio = nights * 75.2;
    priceApartment = nights * 68.7;
    if (nights > 14) {
      priceStudio -= priceStudio * 0.2;
      priceApartment -= priceApartment * 0.1;
    }
  }
  if (month == "July" || month == "August") {
    priceStudio = nights * 76;
    priceApartment = nights * 77;
    if (nights > 14) {
      priceApartment -= priceApartment * 0.1;
    }
  }
  console.log(`Apartment: ${priceApartment.toFixed(2)} lv.`);
  console.log(`Studio: ${priceStudio.toFixed(2)} lv.`);
}
calculate(["August", "20"]);
