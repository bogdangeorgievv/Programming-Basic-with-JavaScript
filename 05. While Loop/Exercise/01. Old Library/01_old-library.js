function oldLibrary(input) {

    let bookname = input[0];
    let secondbook = input[1];
    let index = 1;
    let checkedbooks = 0;

    while(secondbook !== "No More Books") {
        secondbook = input[index];
        index++;
        if (secondbook !== bookname) {
            checkedbooks++;
        }  else {
            console.log(`You checked ${index-2} books and found it.`);
            return;
        }
    } 
    console.log(`The book you search is not here!`)
    console.log(`You checked ${checkedbooks-1} books.`)
}

oldLibrary(["Bourne",
"True Story",
"Forever",
"More Space",
"The Girl",
"Spaceship",
"Strongest",
"Profit",
"Tripple",
"Stella",
"The Matrix",
"Bourne"])
