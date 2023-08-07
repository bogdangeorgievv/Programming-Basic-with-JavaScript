function vacation(input) {
  let days = Number(input[0]);
  let roomtype = input[1];
  let feedback = input[2];
  let price = 0;

  if (roomtype == "room for one person") {
    price = (days - 1) * 18;
  }

  if (roomtype == "apartment") {
    if (days <= 10) {
      price = (days - 1) * 25 * 0.7;
    }
    if (days > 10 && days <= 15) {
      price = (days - 1) * 25 * 0.65;
    }
    if (days > 15) {
      price = (days - 1) * 25 * 0.5;
    }
  }

  if (roomtype == "president apartment") {
    if (days <= 10) {
      price = (days - 1) * 35 * 0.9;
    }
    if (days > 10 && days <= 15) {
      price = (days - 1) * 35 * 0.85;
    }
    if (days > 15) {
      price = (days - 1) * 35 * 0.8;
    }
  }
  if (feedback == "positive") {
    price += price * 0.25;
  } else if (feedback == "negative") {
    price -= price * 0.1;
  }
  console.log(price.toFixed(2));
}
vacation(["30", "president apartment", "negative"]);
