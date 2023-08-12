function histogram(input) {
  
  let n = Number(input[0]);
  let p1 = 0;
  let p2 = 0;
  let p3 = 0;
  let p4 = 0;
  let p5 = 0;

  for (let i = 1; i <= n; i++) {
    let number = Number(input[i]);
    if (number < 200) {
      p1++;
    }
    if (number >= 200 && number < 400) {
      p2++;
    }
    if (number >= 400 && number < 600) {
      p3++;
    }
    if (number >= 600 && number < 800) {
      p4++;
    }
    if (number >= 800) {
      p5++;
    }
  }
  let procent1 = (p1 / n) * 100;
  let procent2 = (p2 / n) * 100;
  let procent3 = (p3 / n) * 100;
  let procent4 = (p4 / n) * 100;
  let procent5 = (p5 / n) * 100;

  console.log(procent1.toFixed(2) + "%");
  console.log(procent2.toFixed(2) + "%");
  console.log(procent3.toFixed(2) + "%");
  console.log(procent4.toFixed(2) + "%");
  console.log(procent5.toFixed(2) + "%");
}
histogram(["14","53","7","56","180","450","920","12","7","150","250","680","2","600","200"]);
