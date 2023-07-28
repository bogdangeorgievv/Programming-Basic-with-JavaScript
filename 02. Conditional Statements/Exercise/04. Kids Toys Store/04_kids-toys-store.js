function calculate(inputArray) {
  let excursionPrice = Number(inputArray[0]); 
  let amountPuzzle = Number(inputArray[1]); 
  let amountTalkingDoll = Number(inputArray[2]); 
  let amountTeddyBear = Number(inputArray[3]); 
  let amountMinion = Number(inputArray[4]); 
  let amountTruckToy = Number(inputArray[5]); 

  let totalSum =
    amountPuzzle * 2.6 +
    amountTalkingDoll * 3 +
    amountTeddyBear * 4.1 +
    amountMinion * 8.2 +
    amountTruckToy * 2;

  if (
    amountPuzzle +
      amountTalkingDoll +
      amountTeddyBear +
      amountMinion +
      amountTruckToy >=
    50
  ) {
    totalSum -= totalSum * 0.25;
  }
  totalSum -= totalSum * 0.1;
  if (totalSum >= excursionPrice) {
    console.log(`Yes! ${(totalSum - excursionPrice).toFixed(2)} lv left`);
  } else {
    console.log(
      `Not enough money! ${(excursionPrice - totalSum).toFixed(2)} lv needed`
    );
  }
}
calculate(["40.8", "20", "25", "30", "50", "10"]);
