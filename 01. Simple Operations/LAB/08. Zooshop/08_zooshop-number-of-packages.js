function zooshop(input) {
  const dogp = 2.5;
  const catp = 4;
  let numdogp = Number(input[0]);
  let numcatp = Number(input[1]);
  let finalprice = dogp * numdogp + catp * numcatp;
  console.log(`${finalprice} lv.`);
}
zooshop([`13`, `9`]);
