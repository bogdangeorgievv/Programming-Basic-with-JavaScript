function check(input) {
  let exhour = Number(input[0]);
  let exmin = Number(input[1]);
  let arrhour = Number(input[2]);
  let arrmin = Number(input[3]);
  let extimemin = exhour * 60 + exmin;
  let arrtimemin = arrhour * 60 + arrmin;
  let ontime;
  let difference = extimemin - arrtimemin;

  if (difference == 0) {
    ontime = "On time";
    console.log(ontime);
  }
  if (difference > 0 && difference <= 30) {
    ontime = "On time";
    console.log(ontime);
    console.log(`${difference} minutes before the start`);
  }
  if (difference > 30 && difference < 60) {
    ontime = "Early";
    console.log(ontime);
    console.log(`${difference} minutes before the start`);
  }
  if (difference >= 60) {
    ontime = "Early";
    console.log(ontime);
    if (difference % 60 >= 0 && difference % 60 < 10) {
      console.log(
        `${Math.trunc(difference / 60)}:0${
          difference % 60
        } hours before the start`
      );
    } else {
      console.log(
        `${Math.trunc(difference / 60)}:${
          difference % 60
        } hours before the start`
      );
    }
  }
  if (difference < 0 && difference > -60) {
    ontime = "Late";
    console.log(ontime);
    console.log(`${Math.abs(difference)} minutes after the start`);
  }
  if (difference == -60) {
    ontime = "Late";
    console.log(ontime);
    console.log(
      `${Math.abs(Math.trunc(difference / 60))}:0${
        difference % 60
      } hours after the start`
    );
  }
  if (difference < -60) {
    ontime = "Late";
    console.log(ontime);
    if (difference % 60 > -10) {
      console.log(
        `${Math.abs(Math.trunc(difference / 60))}:0${Math.abs(
          difference % 60
        )} hours after the start`
      );
    } else {
      console.log(
        `${Math.abs(Math.trunc(difference / 60))}:${Math.abs(
          difference % 60
        )} hours after the start`
      );
    }
  }
}
check(["11", "00", "12", "10"]);
