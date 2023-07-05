function noBoringZeros(n) {
  // Convert the number to a string
  let numberString = n.toString();

  // Iterate from the end of the string and remove trailing zeros
  let i = numberString.length - 1;
  while (i > 0 && numberString[i] === "0") {
    i--;
  }

  // Return the number without trailing zeros and convert it back to an integer
  console.log(numberString.substring(0, i));
  let resultString = numberString.substring(0, i + 1);
  return parseInt(resultString, 10);
}

console.log(noBoringZeros(960));
