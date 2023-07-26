function check(input) {
  let password = input[0];
  if (password === "s3cr3t!P@ssw0rd") {
    console.log("Welcome");
  } else {
    console.log("Wrong password!");
  }
}
check(["s3cr3t!p@ss"]);
