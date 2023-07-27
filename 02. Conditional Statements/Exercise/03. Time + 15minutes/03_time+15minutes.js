function timePlus15(input) {
  
  let a = Number(input[0]); 
  let b = Number(input[1]); 
  let plus15 = b + 15; 
  
  if (plus15 >= 60) {
    a = a + 1; 
    plus15 = plus15 % 60; 
  }
  if (a >= 24) {
    a = 0;
  }
  if (plus15 >= 10) {
    console.log(`${a}:${plus15}`);
  } else {
    console.log(`${a}:0${plus15}`);
  }
}
timePlus15([13, 10]);
