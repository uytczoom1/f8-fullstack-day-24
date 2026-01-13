// Exercise 1: Check for a Prime Number

const isPrime = (n) => {
    if(typeof n !== "number" || n <= 1) return false;
    for(let i = 2; i <= Math.sqrt(n); i++){
        if(n % i === 0) return false;
    }
    return true;
}


// Exercise 2: Check for a Perfect Number

const isPerfectNumber = (n) => {
    if(typeof n !== "number" || n <= 0) return false;
    let sum = 0;
    for(let i = 1; i <= n / 2; i++){
        if(n % i === 0) sum += i;
    }
    return sum === n;
}
