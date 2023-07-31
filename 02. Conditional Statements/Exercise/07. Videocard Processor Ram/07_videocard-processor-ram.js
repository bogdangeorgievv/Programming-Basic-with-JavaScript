function calculate(input) {
  let budget = Number(input[0]);
  let nvc = Number(input[1]);
  let npr = Number(input[2]);
  let nram = Number(input[3]);

  let vcprice = 250.00;
  let prprice = vcprice * nvc * 0.35;
  let ramprice = vcprice * nvc * 0.1;
  let difference = 0;

  let total = nvc * vcprice + npr * prprice + nram * ramprice;
  if (nvc > npr) {
    total = total * 0.85;
  }
  if (total > budget) {
    difference = (total - budget).toFixed(2);
    console.log(`Not enough money! You need ${difference} leva more!`);
  } else {
    difference = (budget - total).toFixed(2);
    console.log(`You have ${difference} leva left!`);
  }
}
calculate([`920.45`, `3`, `1`, `1 `]);
