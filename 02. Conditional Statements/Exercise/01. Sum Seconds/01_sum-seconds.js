function sumSeconds(inputArray) {
  
  let first = Number(inputArray[0]);
  let second = Number(inputArray[1]);
  let third = Number(inputArray[2]);
  
  let totalSeconds = first + second + third;
  let minutes = Math.floor(totalSeconds / 60);
  let seconds = totalSeconds % 60;
  
  if (seconds < 10) {
    console.log(`${minutes}:0${seconds}`);
  } else {
    console.log(`${minutes}:${seconds}`);
  }
}
sumSeconds([`22`, `7`, `34`]);
