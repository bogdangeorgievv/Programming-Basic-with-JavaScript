function check(input) {
  let city = input[0];
  let sales = Number(input[1]);
  let commission = 0;

  switch (city) {
    case "Sofia":
      if (sales >= 0 && sales <= 500) {
        commission = 0.05;
      }
      if (sales > 500 && sales <= 1000) {
        commission = 0.07;
      }
      if (sales > 1000 && sales <= 10000) {
        commission = 0.08;
      }
      if (sales > 10000) {
        commission = 0.12;
      }
      break;
    case "Varna":
      if (sales >= 0 && sales <= 500) {
        commission = 0.045;
      }
      if (sales > 500 && sales <= 1000) {
        commission = 0.075;
      }
      if (sales > 1000 && sales <= 10000) {
        commission = 0.1;
      }
      if (sales > 10000) {
        commission = 0.13;
      }
      break;
    case "Plovdiv":
      if (sales >= 0 && sales <= 500) {
        commission = 0.055;
      }
      if (sales > 500 && sales <= 1000) {
        commission = 0.08;
      }
      if (sales > 1000 && sales <= 10000) {
        commission = 0.12;
      }
      if (sales > 10000) {
        commission = 0.145;
      }
      break;
  }
  if (commission == 0) {
    console.log("error");
  } else {
    console.log((sales * commission).toFixed(2));
  }
}
check(["Kaspichan", "-50"]);
