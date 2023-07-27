function calculate(input) {
  let shape = input[0];
  let a = 0;
  let b = 0;
  let h = 0;
  let r = 0;
  let area = 0;
  if (shape === "square") {
    a = Number(input[1]);
    area = a * a;
  } else if (shape === "rectangle") {
    a = Number(input[1]);
    b = Number(input[2]);
    area = a * b;
  } else if (shape === "circle") {
    r = Number(input[1]);
    area = Math.PI * (r * r);
  } else if (shape === "triangle") {
    b = Number(input[1]);
    h = Number(input[2]);
    area = (1 / 2) * (b * h);
  }
  let fixedarea = area.toFixed(3);
  console.log(fixedarea);
}
calculate([`circle`, `6`]);
