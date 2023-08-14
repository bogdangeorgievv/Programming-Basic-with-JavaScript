function password(input) {
    let username = input[0];
    let password = input[1];
    let guessPassword = input[2];
    let index = 3;
    while(guessPassword!==password) {
        guessPassword=input[index];
        index++;
    }
    console.log(`Welcome ${username}!`);
}
password(["Gosho", "secret", "secret"])
