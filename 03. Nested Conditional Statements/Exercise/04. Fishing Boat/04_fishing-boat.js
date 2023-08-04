function calculate(input) {
  let budget = Number(input[0]); //3000
  let season = input[1]; // Summer
  let fishermen = Number(input[2]); //12
  let price = 0;

  switch (season) {
    case "Spring":
      if (fishermen <= 6) {
        price = 3000 * 0.9;
      }
      if (fishermen > 6 && fishermen <= 11) {
        price = 3000 * 0.85;
      }
      if (fishermen >= 12) {
        price = 3000 * 0.75;
      }
      break;
    case "Summer":
    case "Autumn":
      if (fishermen <= 6) {
        price = 4200 * 0.9;
      }
      if (fishermen > 6 && fishermen <= 11) {
        price = 4200 * 0.85;
      }
      if (fishermen >= 12) {
        price = 4200 * 0.75;
      }
      break;
    case "Winter":
      if (fishermen <= 6) {
        price = 2600 * 0.9;
      }
      if (fishermen > 6 && fishermen <= 11) {
        price = 2600 * 0.85;
      }
      if (fishermen >= 12) {
        price = 2600 * 0.75;
      }
      break;
  }
  if (
    (season == "Spring" || season == "Summer" || season == "Winter") &&
    fishermen % 2 == 0
  ) {
    price = price * 0.95;
  }
  if (budget >= price) {
    console.log(`Yes! You have ${(budget - price).toFixed(2)} leva left.`);
  } else {
    console.log(
      `Not enough money! You need ${(price - budget).toFixed(2)} leva.`
    );
  }
}
calculate(["3000", "Summer", "12"]);
