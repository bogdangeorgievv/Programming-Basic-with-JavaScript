function calculate(input) {
  let n = Number(input[0]);
  let x = Number(input[1]);
  let p = Number(input[2]);

  let m = 0;
  let money = 0;
  let toys = 0;
  let brother = 0;

  for (let i = 1; i <= n; i++) {
    if (i % 2 == 0) {
      m = m + 10;
      money = money + m;
      brother++; //2
    } else {
      toys++;
    }
  }
  money = money + toys * p - brother;
  if (money >= x) {
    console.log(`Yes! ${(money - x).toFixed(2)}`);
  } else {
    console.log(`No! ${(x - money).toFixed(2)}`);
  }
}
calculate(["21", "1570.98", "3"]);
