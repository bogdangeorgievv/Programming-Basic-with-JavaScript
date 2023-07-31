function timeForMovie(input) {
    let name = input[0];
    let epduration = Number(input[1]);
    let breakduration = Number(input[2]);

    let lunchduration = breakduration/8;
    let relaxduration = breakduration/4;
    let timeleft = breakduration - (lunchduration + relaxduration);
    let difference = 0;
    if(timeleft>=epduration) {
        difference = Math.ceil(timeleft - epduration);
        console.log(`You have enough time to watch ${name} and left with ${difference} minutes free time.`);
    } else {
        difference = Math.ceil(epduration - timeleft);
        console.log(`You don't have enough time to watch ${name}, you need ${difference} more minutes.`);
    }
}
timeForMovie([`Game of Thrones`,`48`,`60`])
