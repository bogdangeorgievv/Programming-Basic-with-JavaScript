function calculate(input) {
  let movie = input[0];
  let rows = Number(input[1]);
  let columns = Number(input[2]);
  let price = 0;

  if (movie == "Premiere") {
    price = 12;
  }
  if (movie == "Normal") {
    price = 7.5;
  }
  if (movie == "Discount") {
    price = 5;
  }
  console.log(`${(rows * columns * price).toFixed(2)} leva`);
}
calculate(["Premiere", "10", "12"]);
