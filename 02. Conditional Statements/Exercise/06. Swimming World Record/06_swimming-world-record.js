function record(input) {
  let recordInSeconds = Number(input[0]);
  let distanceInMeters = Number(input[1]);
  let secondsForOneMeter = Number(input[2]);

  let clearTimeOfSwimming = distanceInMeters * secondsForOneMeter;
  let waterResistance = Math.floor(distanceInMeters / 15) * 12.5;
  let fullTimeOfSwimming = clearTimeOfSwimming + waterResistance;

  if (fullTimeOfSwimming < recordInSeconds) {
    console.log(
      `Yes, he succeeded! The new world record is ${fullTimeOfSwimming.toFixed(
        2
      )} seconds`
    );
  } else {
    console.log(
      `No, he failed! He was ${(fullTimeOfSwimming - recordInSeconds).toFixed(
        2
      )} seconds slower.`
    );
  }
}
record(["10464", "1500", "20"]);
