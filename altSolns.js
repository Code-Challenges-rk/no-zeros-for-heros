function noBoringzZeros(n) {
  while (n % 10 == 0 && n != 0) {
    n /= 10;
  }
  return n;
}

function noBooringZeros(n) {
  return +`${n}`.replace(/0*$/, "");
}

function noboringZeros(n) {
  return Number(String(n).replace(/0+$/, ""));
}

const nOBoringZeros = (n) =>
  parseInt(n.toString().replace(/0+$/g, "") + 0) / 10;

function noBoringZerosS(n) {
  return n % 10 || n === 0 ? n : noBoringZerosS(n / 10);
}

console.log(noBoringZerosS(10));
console.log(10/10);
