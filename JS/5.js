let posit = 0;
let negat = 0;
let zero = 0;
let even = 0;
let odd = 0;
for (let i = 1; i <= 10; i++) {
    let numb = +(prompt("Enter the number as an integer"));
    console.log("numb=" + numb);
    if ((isNaN(numb)) || (numb % 1)) {
        console.log("Incorrectly entered data!");
    } else {
        if (numb < 0) negat++
        else if (numb > 0) posit++
        else zero++;
        if (numb % 2) odd++
        else even++;
    }
}
console.log("posit=" + posit);
console.log("negat=" + negat);
console.log("zero=" + zero);
console.log("even=" + even);
console.log("odd=" + odd);