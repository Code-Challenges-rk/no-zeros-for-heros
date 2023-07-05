function soln(n) {
  // convert it to a string
  let str = n.toString();

  // capture the last character
  let i = str.length - 1;
  
  // loop through each character starting with the last character

    while (i > 0 && str[i] === '0') {
        i--;
    }
    return parseInt(str.substr(0, i+1));
    // return out;
}

console.log(soln(350));
