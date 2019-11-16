let numb = +(prompt("Enter the number as an integer"));
console.log("numb=" + numb);
if ((isNaN(numb)) || (numb % 1)) {
    console.log("Incorrectly entered data!");
} else {
    let shift = +(prompt("Enter the shift number"));
    console.log("shift=" + shift);
    if ((isNaN(shift)) || (shift % 1)) {
        console.log("Incorrectly entered data!");
    } else {
        let numb2 = 0;
        for (let i = 1;
            ((numb / (10 ** shift)) > 1); i = i * 10) {
            numb2 = numb2 + (numb % 10) * i;
            console.log("numb2=" + numb2);
            numb = (numb - numb % 10) / 10;
            console.log("numb=" + numb);
        }
        numb2 = numb2 * (10 ** shift) + numb;
        console.log("numb2=" + numb2);
    }
}