function moving(input) {
  let shirochina = Number(input[0]);
  let dyljina = Number(input[1]);
  let visochina = Number(input[2]);
  let obem = shirochina * dyljina * visochina;

  let index = 3;

  while (obem > 0) {
    if (input[index] == "Done") {
      break;
    }
    let broikashoni = Number(input[index]);
    obem = obem - broikashoni;
    index++;
  }
  if (obem > 0) {
    console.log(`${obem} Cubic meters left.`);
  } else {
    console.log(
      `No more free space! You need ${Math.abs(obem)} Cubic meters more.`
    );
  }
}
moving(["10", "1", "2", "4", "6", "Done"]);
