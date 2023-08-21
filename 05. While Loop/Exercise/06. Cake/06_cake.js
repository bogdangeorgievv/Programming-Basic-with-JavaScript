function cake(inputArray) {
  let dyljina = Number(inputArray[0]);
  let shirochina = Number(inputArray[1]);
  let obshtoparcheta = dyljina * shirochina;
  let vzemane = 0;
  let index = 2;

  while (obshtoparcheta > 0) {
    if (inputArray[index] == "STOP") {
      break;
    }

    vzemane = Number(inputArray[index]);
    obshtoparcheta -= vzemane;
    index++;
  }
  if (obshtoparcheta <= 0) {
    console.log(
      `No more cake left! You need ${Math.abs(obshtoparcheta)} pieces more.`
    );
  } else {
    console.log(`${obshtoparcheta} pieces are left.`);
  }
}
cake(["10", "2", "2", "4", "6", "STOP"]);
