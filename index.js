let number1 = 5;
let number2 = 0;
let result;
if (number1 > 0 && number2 > 0 || number1 < 0 && number2 < 0) {
  result = number1 * number2;
} else if (number1 > 0 && number2 < 0 || number1 < 0 && number2 > 0) {
  result = number1 / number2;
} else if (number1 === 0 || number2 === 0) {
  result = number1 || number2;
} else if (number1 === 0 && number2 === 0) {
  result = NaN;
}
console.log(result);


let number3 = 17;
if (!(number3 >= 0 && number3 % 2 === 0 && number3 % 3 === 0 && number3 % 6 === 0)
) {
  console.log("lose");
} else {
  console.log("win");
}