function oscars(inputArray) {
  let actorNameInput = inputArray[0];
  let startingPointsInput = Number(inputArray[1]);
  let juryCountInput = Number(inputArray[2]);

  let allPoints = startingPointsInput;

  for (let i = 1; i < juryCountInput * 2; i += 2) {
    let juryName = inputArray[i + 2];
    let juryPoints = Number(inputArray[i + 3]);

    allPoints += (juryName.length * juryPoints) / 2;

    if (allPoints > 1250.5) {
      break;
    }
  }
  if (allPoints > 1250.5) {
    console.log(
      `Congratulations, ${actorNameInput} got a nominee for leading role with ${allPoints.toFixed(
        1
      )}!`
    );
  } else {
    console.log(
      `Sorry, ${actorNameInput} you need ${(1250.5 - allPoints).toFixed(
        1
      )} more!`
    );
  }
}
oscars(["Zahari Baharov","205","4","Johnny Depp","45","Will Smith","29","Jet Lee","10","Matthew Mcconaughey","39",]);
