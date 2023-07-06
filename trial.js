function hii(n){
    // convert the number to a string
    let str = n.toString();

    let i = str.length - 1;
    console.log(str[i]);

    while (str[i] === '0' && str !== '0'){
        i--;
    }

    return str.substring(0, i+1);
}

// console.log(hii(30));

const down = (n) => {
    let str = n.toString().replace(/0+$/, '')
    return parseInt(str, 10)
}

console.log(down(400));