function movie(inputArray) {
  let movieBudget = Number(inputArray[0]);
  let statistCount = Number(inputArray[1]);
  let clothing = Number(inputArray[2]);

  let decor = movieBudget * 0.1;
  let totalPriceClothing = clothing * statistCount;

  if (statistCount > 150) {
    totalPriceClothing -= totalPriceClothing * 0.1;
  }

  let moviePrice = decor + totalPriceClothing;

  if (moviePrice > movieBudget) {
    console.log("Not enough money!");
    console.log(
      `Wingard needs ${(moviePrice - movieBudget).toFixed(2)} leva more.`
    );
  } else {
    console.log("Action!");
    console.log(
      `Wingard starts filming with ${(movieBudget - moviePrice).toFixed(
        2
      )} leva left.`
    );
  }
}
movie(["9587.88", "222", "55.68"]);
