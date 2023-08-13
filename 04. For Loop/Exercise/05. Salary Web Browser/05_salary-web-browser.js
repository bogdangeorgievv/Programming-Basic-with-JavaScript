function solve(input) {
  let tabs = Number(input[0]);
  let salary = Number(input[1]);

  let fee = 0;

  for (let i = 2; i <= tabs + 2; i++) {
    let currentTab = input[i];
    if (currentTab == "Facebook") {
      fee += 150;
    } else if (currentTab == "Instagram") {
      fee += 100;
    } else if (currentTab == "Reddit") {
      fee += 50;
    }
  }
  salary = salary - fee;
  if (salary <= 0) {
    console.log(`You have lost your salary.`);
  } else {
    console.log(`${Math.trunc(salary)}`);
  }
}
solve(["3", "500", "Facebook", "Stackoverflow.com", "softuni.bg"]);
