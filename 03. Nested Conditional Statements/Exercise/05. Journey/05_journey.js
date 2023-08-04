function calculate(input) {
  let budget = Number(input[0]);
  let season = input[1];
  let price = 0;
  let destination;
  let place;

  if (budget <= 100) {
    destination = "Bulgaria";
    if (season == "summer") {
      place = "Camp";
      price = budget * 0.3;
    } else if (season == "winter") {
      place = "Hotel";
      price = budget * 0.7;
    }
  }
  if (budget > 100 && budget <= 1000) {
    destination = "Balkans";
    if (season == "summer") {
      place = "Camp";
      price = budget * 0.4;
    } else if (season == "winter") {
      place = "Hotel";
      price = budget * 0.8;
    }
  }
  if (budget > 1000) {
    destination = "Europe";
    place = "Hotel";
    price = budget * 0.9;
  }

  console.log(`Somewhere in ${destination}`);
  console.log(`${place} - ${price.toFixed(2)}`);
}
calculate(["1500", "summer"]);
