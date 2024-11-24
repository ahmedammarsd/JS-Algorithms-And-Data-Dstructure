// Finding The Greates Common Divisor by Useing Euclidian algorithm

// Solve Number One ===============

/*
 ======================= 1
3768 = 1701.2 + 366
1701 = 366.4 + 237
366 = 237.1 + 129
237 = 129.1 + 108
129 = 108.1 + 21
108 = 21.5 + 3
21 = 3.7 + 0
3

*/
function gcd(num1, num2) {
  if (num2 === 0) {
    return num1;
  }

  let bigN;
  let smallN;
  if (num1 > num2) {
    bigN = num1;
    smallN = num2;
  } else {
    bigN = num2;
    smallN = num1;
  }
  let counter = 1;

  do {
    counter++;
    if (smallN * counter == bigN) {
      counter++;
    }
  } while (smallN * counter < bigN);

  // this for print like expamle in top ================ 1
  console.log(
    `${bigN} = ${smallN}.${counter - 1} + ${bigN - smallN * (counter - 1)}`
  );
  return gcd(smallN, bigN - smallN * (counter - 1));

  //   for (let i = 1; i < smallN; i++) {

  //     if (smallN * i > bigN) {
  //       gcd(num2, bigN - smallN * (i - 1));
  //       // console.log(i - 1, bigN - smallN * (i - 1), bigN % (smallN * (i - 1)));
  //     }
  //   }
}
console.time();
console.log(gcd(1701, 3768));
console.timeEnd();
console.log("=====================");

// Solve Number Two - Refactor The first Function =======
function gcd2(num1, num2) {
  if (num2 === 0) {
    return num1;
  }
  let bigN;
  let smallN;
  if (num1 > num2) {
    bigN = num1;
    smallN = num2;
  } else {
    bigN = num2;
    smallN = num1;
  }
  console.log(bigN, smallN);

  return gcd2(smallN, bigN % smallN);
}
console.log(gcd2(1701, 3768));
