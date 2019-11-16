let numb = +(prompt("Enter the number as an integer"));
console.log("numb=" + numb);
if ((isNaN(numb)) || (numb % 1)) {
    console.log("Incorrectly entered data!");
} else {
    let i = 1;
    for (; numb != 0; i++) numb = (numb - numb % 10) / 10;
    console.log("i=" + (i - 1));
}