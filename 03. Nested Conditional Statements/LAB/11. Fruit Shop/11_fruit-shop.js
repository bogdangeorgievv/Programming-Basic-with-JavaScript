function fruitShop(input) {
  let fruit = input[0];
  let day = input[1];
  let quantity = input[2];
  let price = 0;

  switch (day) {
    case "Monday":
    case "Tuesday":
    case "Wednesday":
    case "Thursday":
    case "Friday":
      if (fruit == "banana") {
        price = 2.5;
      }
      if (fruit == "apple") {
        price = 1.2;
      }
      if (fruit == "orange") {
        price = 0.85;
      }
      if (fruit == "grapefruit") {
        price = 1.45;
      }
      if (fruit == "kiwi") {
        price = 2.7;
      }
      if (fruit == "pineapple") {
        price = 5.5;
      }
      if (fruit == "grapes") {
        price = 3.85;
      }
      break;
    case "Saturday":
    case "Sunday":
      if (fruit == "banana") {
        price = 2.7;
      } else if (fruit == "apple") {
        price = 1.25;
      } else if (fruit == "orange") {
        price = 0.9;
      } else if (fruit == "grapefruit") {
        price = 1.6;
      } else if (fruit == "kiwi") {
        price = 3.0;
      } else if (fruit == "pineapple") {
        price = 5.6;
      } else if (fruit == "grapes") {
        price = 4.2;
      }
      break;
  }
  if (price == 0) {
    //if they give wrong fruit-price is 0 as declared above
    console.log("error");
  } else {
    console.log((price * quantity).toFixed(2));
  }
}
fruitShop(["apple", "Monday", "0.5"]);
