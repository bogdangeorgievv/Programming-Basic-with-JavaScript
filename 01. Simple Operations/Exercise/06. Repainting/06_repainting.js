function calculate(input) {
  let nylonpersqm = 1.5;
  let paintperliter = 14.5;
  let thinnerperliter = 5.0;
  let numbernylon = Number(input[0]);
  let numberpaint = Number(input[1]);
  let numberthinner = Number(input[2]);
  let hoursworkers = Number(input[3]);
  let rumenadding =
    (numbernylon + 2) * nylonpersqm + numberpaint * 1.1 * paintperliter + 0.4;
  let materialexpenses = rumenadding + numberthinner * thinnerperliter;
  let workersexpenses = materialexpenses * 0.3 * hoursworkers;
  let totalexpenses = materialexpenses + workersexpenses;
  console.log(totalexpenses);
}
calculate([`5`, `10`, `10`, `1`]);
