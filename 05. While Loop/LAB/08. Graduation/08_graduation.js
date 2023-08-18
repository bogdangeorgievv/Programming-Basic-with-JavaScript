function graduation(input) {
    let name = input[0];  
    let grade = 1;
    let index = 1;
    let mark = 0;
    let summark = 0;
    let excluded = 0;

    while(grade<=12){
        mark = Number(input[index]);
        index++;
        if(mark>=4.00) {
            grade++;
            summark+=mark;
        } else {
            excluded++;
            if(excluded>1) {
                break;
            }
        }
        
    }
    let average = summark/12;
    if(average>=4.0){
        console.log(`${name} graduated. Average grade: ${average.toFixed(2)}`);
    } else {
        console.log(`${name} has been excluded at ${grade} grade`);
    }
}
graduation(["Mimi", "5", "6", "5","6", "5", "6", "6", "2", "3"])  
