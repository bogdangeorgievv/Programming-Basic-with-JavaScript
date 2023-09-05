function traveling(input) {

    let command = input[0];
    let index = 1;

    while(command !== "End") {

        let destination = command;
        let budget = Number(input[index]);
        index++;

        let moneySaved = 0;

        while (moneySaved < budget) {
            let currentBudget = Number(input[index]);
            index++;
            moneySaved += currentBudget;
        }
        console.log(`Going to ${destination}!`);
        command = input[index];
        index++;
        
    }

}
traveling(["Greece",
"1000",
"200",
"200",
"300",
"100",
"150",
"240",
"Spain",
"1200",
"300",
"500",
"193",
"423",
"End"])
