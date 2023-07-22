function calculate(input) {
    let numberOfPages = Number(input[0]);
    let pagesReadIn1Hour = Number(input[1]);
    let numberOfDays = Number(input[2]);
    let howManyHoursHeNeedsToReadADay = (numberOfPages/pagesReadIn1Hour)/numberOfDays;
    console.log(howManyHoursHeNeedsToReadADay);
}
calculate([`432`, `15`, `4`])
