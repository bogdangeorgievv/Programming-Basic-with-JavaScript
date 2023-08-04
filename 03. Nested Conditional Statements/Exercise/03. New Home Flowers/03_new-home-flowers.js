function calculate(input) {
  let flower = input[0];
  let count = input[1];
  let budget = input[2];
  let price = 0;

  if (flower == "Roses") {
    if (count > 80) {
      price = count * 5 * 0.9;
    } else {
      price = count * 5;
    }
  }
  if (flower == "Dahlias") {
    if (count > 90) {
      price = count * 3.8 * 0.85;
    } else {
      price = count * 3.8;
    }
  }
  if (flower == "Tulips") {
    if (count > 80) {
      price = count * 2.8 * 0.85;
    } else {
      price = count * 2.8;
    }
  }
  if (flower == "Narcissus") {
    if (count < 120) {
      price = count * 3 * 1.15;
    } else {
      price = count * 3;
    }
  }
  if (flower == "Gladiolus") {
    if (count < 80) {
      price = count * 2.5 * 1.2;
    } else {
      price = count * 2.5;
    }
  }
  if (budget >= price) {
    console.log(
      `Hey, you have a great garden with ${count} ${flower} and ${(
        budget - price
      ).toFixed(2)} leva left.`
    );
  } else {
    console.log(
      `Not enough money, you need ${(price - budget).toFixed(2)} leva more.`
    );
  }
}
calculate(["Roses", "80", "360"]);
