function calculate(input) {
  let N1 = Number(input[0]); //12
  let N2 = Number(input[1]); //10
  let operator = input[2]; //+
  let result = 0;
  let isEven;

  if (operator == "+") {
    result = N1 + N2;
  }
  if (operator == "-") {
    result = N1 - N2;
  }
  if (operator == "*") {
    result = N1 * N2;
  }
  if (operator == "/") {
    if (N2 == 0) {
      console.log(`Cannot divide ${N1} by zero`);
    } else {
      result = N1 / N2;
      console.log(`${N1} / ${N2} = ${result.toFixed(2)}`);
    }
  }
  if (operator == "%") {
    if (N2 == 0) {
      console.log(`Cannot divide ${N1} by zero`);
    } else {
      result = N1 % N2;
      console.log(`${N1} % ${N2} = ${result}`);
    }
  }

  if (operator == "+" || operator == "-" || operator == "*") {
    if (result % 2 == 0) {
      isEven = "even";
    } else {
      isEven = "odd";
    }
    console.log(`${N1} ${operator} ${N2} = ${result} - ${isEven}`);
  }
}
calculate(["10", "0", "%"]);
