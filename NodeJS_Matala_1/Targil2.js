/*
336540331 - Shemiakin Leonid
תרגיל מבוא
Targil 2
כתבו קוד המדפיס את כל המספרים הראשוניים שערכם קטן מהמספר 237.
*/

const num = 237
printPrimes(num);

function isPrime(num) {
    if (num < 2) return false; // Numbers less than 2 are not prime
    for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0) return false;
    }
    return true;
}

function printPrimes(limit) {
    for (let i = 2; i < limit; i++) {
        if (isPrime(i)) {
            console.log(i);
        }
    }
}
