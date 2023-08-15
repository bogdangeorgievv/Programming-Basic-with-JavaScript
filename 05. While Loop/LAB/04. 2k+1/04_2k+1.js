function print(input) {
    let n = Number(input[0]);
    let counter = 1;   // tricky, брояч.
    while(counter<=n) {
        console.log(counter);
        counter=(counter*2)+1;
    }
}
print(["31"])
