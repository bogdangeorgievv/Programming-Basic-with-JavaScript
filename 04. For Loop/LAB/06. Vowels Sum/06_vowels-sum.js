function calculate(input) {
  let text = input[0];
  let sum = 0;
  let letter;

  for (let i = 0; i < text.length; i++) {
    letter = text.charAt(i);
    switch (letter) {
      case "a":
        sum += 1;
        break;
      case "e":
        sum += 2;
        break;
      case "i":
        sum += 3;
        break;
      case "o":
        sum += 4;
        break;
      case "u":
        sum += 5;
        break;
    }
  }
  console.log(sum);
}
calculate(["hello"]);
