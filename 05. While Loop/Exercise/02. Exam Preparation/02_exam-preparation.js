function prep(inputArray) {
    let badgradeslimit = Number(inputArray[0]);
    let index = 1;
    let badGradesCount = 0;
    let taskCount = 0;
    let gradeSum = 0;
    let currentTaskName;
    let currentGrade;


    while(inputArray[index] !== "Enough") {
        currentTaskName = inputArray[index];
        currentGrade = Number(inputArray[index+1]);
        gradeSum+=currentGrade;

        if(currentGrade<=4.00) {
            badGradesCount++;
        } 
        if(badGradesCount>=badgradeslimit) {
            break;
        }
        if(currentTaskName!=="Enough") {
            taskCount++;
        }
        index+=2;
    }
    if(badGradesCount>=badgradeslimit) {
        console.log(`You need a break, ${badGradesCount} poor grades.`);

    } else {
        console.log(`Average score: ${(gradeSum/taskCount).toFixed(2)}`);
        console.log(`Number of problems: ${taskCount}`);
        console.log(`Last problem: ${currentTaskName}`);

    }
}
prep(["2",
"Income",
"3",
"Game Info",
"6",
"Best Player",
"4"])
