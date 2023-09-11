function solve(input) {
    let n = Number(input[0]);
    let namePresentation = input[1];
    let index = 2;

    let presentationCounter = 0;
    let totalGrades = 0;

    while(namePresentation !== "Finish") {
        presentationCounter++;
        let counter = index;
        let currGrades = 0;
        for (let i = counter; i < counter + n; i++) {
            index++;
            currGrades += Number(input[i]);
        }
        let averageGradePerPresentation = currGrades / n;
        console.log(`${namePresentation} - ${averageGradePerPresentation.toFixed(2)}.`);
        totalGrades = totalGrades + averageGradePerPresentation;
        namePresentation = input[index];
        index++;
    }
    let totalGradesPrint = totalGrades / presentationCounter;
    console.log(`Student's final assessment is ${totalGradesPrint.toFixed(2)}.`);
}
solve(["2",

"While-Loop",

"6.00",

"5.50",

"For-Loop",

"5.84",

"5.66",

"Finish"])
