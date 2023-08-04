function outfit(input) {
  let celsius = Number(input[0]);
  let time = input[1];
  let outfit;
  let shoes;

  if (celsius >= 10 && celsius <= 18) {
    if (time == "Morning") {
      outfit = "Sweatshirt";
      shoes = "Sneakers";
    } else if (time == "Afternoon" || time == "Evening") {
      outfit = "Shirt";
      shoes = "Moccasins";
    }
  }
  if (celsius > 18 && celsius <= 24) {
    if (time == "Morning" || time == "Evening") {
      outfit = "Shirt";
      shoes = "Moccasins";
    } else if (time == "Afternoon") {
      outfit = "T-Shirt";
      shoes = "Sandals";
    }
  }
  if (celsius >= 25) {
    if (time == "Morning") {
      outfit = "T-Shirt";
      shoes = "Sandals";
    } else if (time == "Afternoon") {
      outfit = "Swim Suit";
      shoes = "Barefoot";
    } else if (time == "Evening") {
      outfit = "Shirt";
      shoes = "Moccasins";
    }
  }
  console.log(`It's ${celsius} degrees, get your ${outfit} and ${shoes}.`);
}
outfit(["28", "Evening"]);
