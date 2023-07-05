function noBoringZeros(n) {
  while (n % 10 == 0 && n != 0) {
    n /= 10;
  }
  return n;
}

function noBoringZeros(n) {
  return +`${n}`.replace(/0*$/, "");
}

function noBoringZeros(n) {
  return Number(String(n).replace(/0+$/, ""));
}

const noBoringZeros = (n) =>
  parseInt(n.toString().replace(/0+$/g, "") + 0) / 10;

function noBoringZeros(n) {
  return n % 10 || n === 0 ? n : noBoringZeros(n / 10);
}
